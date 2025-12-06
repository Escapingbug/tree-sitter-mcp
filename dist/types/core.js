/**
 * Core type definitions for the tree-sitter MCP system
 */
/**
 * Creates a lightweight copy of a TreeNode for use in search results.
 *
 * **Problem Solved:**
 * Original search results stored full TreeNode objects containing `children`, `parent`,
 * `parameters`, and `rawNode` references. These created deep reference chains that prevented
 * garbage collection of entire ASTs, causing severe memory leaks in test environments where
 * many searches were performed across multiple projects.
 *
 * **Solution:**
 * This function extracts only the essential data from a TreeNode (location, type, content)
 * while deliberately omitting reference properties that create memory chains. This allows:
 * - Search results to preserve the same API (still contain `node` property)
 * - ASTs to be properly garbage collected after search operations
 * - Memory usage to remain stable during extensive testing
 *
 * **Reference Properties Excluded:**
 * - `children`: Array of child TreeNodes that reference subtrees
 * - `parent`: Parent TreeNode that creates upward references
 * - `parameters`: Array of parameter TreeNodes
 * - `rawNode`: Raw tree-sitter node that holds native parser memory
 *
 * **Data Properties Preserved:**
 * All scalar values and strings needed for search result display and testing.
 *
 * @param node - The original TreeNode from AST parsing
 * @returns Lightweight TreeNode copy with broken reference chains
 *
 * @example
 * ```typescript
 * // In search functions - prevents memory leaks
 * results.push({
 *   node: createLightweightTreeNode(fullNode), // Safe for GC
 *   score: 95,
 *   matches: ['function', 'name']
 * });
 * ```
 *
 * @since 2.2.2 - Added to resolve CI test memory issues
 */
export function createLightweightTreeNode(node) {
    return {
        id: node.id,
        type: node.type,
        name: node.name,
        path: node.path,
        startLine: node.startLine,
        endLine: node.endLine,
        startColumn: node.startColumn,
        endColumn: node.endColumn,
        content: node.content,
        skipped: node.skipped,
        skipReason: node.skipReason,
        // Deliberately exclude reference properties to break memory chains
        parameters: undefined,
        children: undefined,
        parent: undefined,
        rawNode: undefined,
    };
}
//# sourceMappingURL=core.js.map