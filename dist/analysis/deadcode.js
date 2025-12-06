/**
 * Dead code analysis - preserves sophisticated traversal algorithm
 */
import { extractImports } from '../import/resolver.js';
import { TEST_PATTERNS, isTestFile } from '../constants/index.js';
import { escapeRegExp } from '../utils/string-analysis.js';
export function analyzeDeadcode(project) {
    const entryPoints = detectEntryPoints(project);
    const dependencyGraph = buildDependencyGraph(project);
    const reachable = traverseDependencies(entryPoints, dependencyGraph);
    const frameworkFiles = detectFrameworkConventions(project);
    const deadcodeResult = findUnreachableCode(project, reachable, frameworkFiles);
    const metrics = {
        totalFiles: project.files.size,
        unusedFiles: deadcodeResult.unusedFiles.length,
        unusedFunctions: deadcodeResult.unusedNodes.filter(n => n.type === 'function').length,
        unusedVariables: deadcodeResult.unusedNodes.filter(n => n.type === 'variable').length,
        unusedImports: countUnusedImports(project, deadcodeResult.unusedFiles),
    };
    const findings = generateDeadcodeFindings(deadcodeResult);
    return { metrics, findings };
}
function detectEntryPoints(project) {
    const entryPoints = [];
    const entryPatterns = [
        'index.js', 'index.ts', 'main.js', 'main.ts', 'app.js', 'app.ts',
        'server.js', 'server.ts', 'cli.js', 'cli.ts',
    ];
    for (const [filePath] of project.files) {
        const fileName = filePath.split('/').pop()?.toLowerCase() || '';
        if (entryPatterns.some(pattern => fileName === pattern || fileName.endsWith(pattern))) {
            entryPoints.push(filePath);
        }
        if (fileName === 'package.json') {
            try {
                const content = project.files.get(filePath)?.content;
                if (!content)
                    continue;
                const packageJson = JSON.parse(content);
                if (packageJson.main) {
                    entryPoints.push(resolveRelativePath(filePath, packageJson.main));
                }
                if (packageJson.bin) {
                    if (typeof packageJson.bin === 'string') {
                        entryPoints.push(resolveRelativePath(filePath, packageJson.bin));
                    }
                    else {
                        Object.values(packageJson.bin).forEach((binPath) => {
                            entryPoints.push(resolveRelativePath(filePath, binPath));
                        });
                    }
                }
            }
            catch {
                /* ignore parsing errors */
            }
        }
        const fileNode = project.files.get(filePath);
        if (fileNode?.content) {
            if (fileNode.content.includes('process.argv')
                || fileNode.content.includes('commander')
                || fileNode.content.includes('yargs')) {
                entryPoints.push(filePath);
            }
        }
    }
    if (entryPoints.length === 0) {
        for (const [filePath] of project.files) {
            const depth = filePath.split('/').length;
            if (depth <= 2) { // Root or one level deep
                entryPoints.push(filePath);
            }
        }
    }
    return [...new Set(entryPoints)]; // Remove duplicates
}
function buildDependencyGraph(project) {
    const graph = new Map();
    for (const [filePath, fileNode] of project.files) {
        const dependencies = new Set();
        if (fileNode.content) {
            const imports = extractImports(fileNode.content);
            for (const importPath of imports) {
                const resolved = resolveImportToFile(importPath, filePath, project);
                if (resolved) {
                    dependencies.add(resolved);
                }
            }
        }
        graph.set(filePath, dependencies);
    }
    return graph;
}
function traverseDependencies(entryPoints, dependencyGraph) {
    const reachable = new Set();
    const visited = new Set();
    function dfs(filePath) {
        if (visited.has(filePath))
            return;
        visited.add(filePath);
        reachable.add(filePath);
        const dependencies = dependencyGraph.get(filePath);
        if (dependencies) {
            for (const dep of dependencies) {
                dfs(dep);
            }
        }
    }
    for (const entryPoint of entryPoints) {
        dfs(entryPoint);
    }
    return reachable;
}
function detectFrameworkConventions(project) {
    const frameworkFiles = new Set();
    for (const [filePath] of project.files) {
        if (filePath.includes('/pages/')
            || filePath.includes('/app/')
            || TEST_PATTERNS.NEXT_JS_SPECIAL.some(pattern => filePath.includes(pattern))
            || filePath.includes('/api/')) {
            frameworkFiles.add(filePath);
        }
    }
    for (const [filePath] of project.files) {
        if (filePath.includes('/pages/')
            || filePath.includes('/layouts/')
            || filePath.includes('/middleware/')
            || filePath.includes('/plugins/')) {
            frameworkFiles.add(filePath);
        }
    }
    for (const [filePath] of project.files) {
        if (filePath.includes('/src/views/')
            || filePath.includes('/src/components/')
            || filePath.includes('/src/router/')) {
            frameworkFiles.add(filePath);
        }
    }
    for (const [filePath] of project.files) {
        if (isTestFile(filePath)) {
            frameworkFiles.add(filePath);
        }
    }
    return frameworkFiles;
}
function findUnreachableCode(project, reachable, frameworkFiles) {
    const unusedFiles = [];
    const unusedNodes = [];
    for (const [filePath] of project.files) {
        if (!reachable.has(filePath) && !frameworkFiles.has(filePath)) {
            unusedFiles.push(filePath);
        }
    }
    for (const [filePath, nodes] of project.nodes) {
        if (reachable.has(filePath)) {
            const fileContent = project.files.get(filePath)?.content || '';
            for (const node of nodes) {
                if (node.type === 'function' && node.name) {
                    if (!isNodeUsed(node.name, fileContent, project)) {
                        unusedNodes.push(node);
                    }
                }
            }
        }
    }
    return {
        unusedFiles,
        unusedNodes,
        entryPoints: Array.from(reachable),
        reachableFiles: reachable,
    };
}
function resolveImportToFile(importPath, currentFile, project) {
    if (importPath.startsWith('./') || importPath.startsWith('../')) {
        const dir = currentFile.split('/').slice(0, -1).join('/');
        const resolved = `${dir}/${importPath}`;
        const extensions = ['', '.js', '.ts', '.jsx', '.tsx', '/index.js', '/index.ts'];
        for (const ext of extensions) {
            const candidate = resolved + ext;
            if (project.files.has(candidate)) {
                return candidate;
            }
        }
    }
    return null;
}
function resolveRelativePath(basePath, relativePath) {
    const baseDir = basePath.split('/').slice(0, -1).join('/');
    return `${baseDir}/${relativePath}`;
}
function isNodeUsed(nodeName, fileContent, _project) {
    const regex = new RegExp(`\\b${escapeRegExp(nodeName)}\\b`, 'g');
    const matches = fileContent.match(regex);
    return (matches?.length || 0) > 1;
}
function countUnusedImports(project, unusedFiles) {
    let count = 0;
    for (const [filePath, fileNode] of project.files) {
        if (!unusedFiles.includes(filePath) && fileNode.content) {
            const imports = extractImports(fileNode.content);
            for (const importPath of imports) {
                const resolved = resolveImportToFile(importPath, filePath, project);
                if (resolved && unusedFiles.includes(resolved)) {
                    count++;
                }
            }
        }
    }
    return count;
}
function generateDeadcodeFindings(result) {
    const findings = [];
    for (const filePath of result.unusedFiles) {
        findings.push({
            type: 'deadcode',
            category: 'unused_file',
            severity: 'warning',
            location: filePath,
            description: `File appears to be unused and can potentially be removed`,
            context: 'Verify this file is not referenced by framework conventions or external tools',
        });
    }
    for (const node of result.unusedNodes.filter(n => n.type === 'function')) {
        findings.push({
            type: 'deadcode',
            category: 'unused_function',
            severity: 'info',
            location: `${node.path}:${node.startLine || 0}`,
            description: `Function '${node.name}' appears to be unused`,
            context: 'Consider removing if no longer needed',
        });
    }
    return findings;
}
//# sourceMappingURL=deadcode.js.map