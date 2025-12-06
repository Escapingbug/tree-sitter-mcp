/**
 * File extension and type constants
 */
export declare const LOGIC_EXTENSIONS: {
    readonly JAVASCRIPT: readonly [".js", ".mjs", ".cjs"];
    readonly TYPESCRIPT: readonly [".ts", ".d.ts"];
    readonly PYTHON: readonly [".py", ".pyw", ".pyi"];
    readonly GO: readonly [".go"];
    readonly RUST: readonly [".rs"];
    readonly JAVA: readonly [".java"];
    readonly C: readonly [".c", ".h"];
    readonly CPP: readonly [".cpp", ".cxx", ".cc", ".hpp", ".hxx"];
    readonly RUBY: readonly [".rb"];
    readonly CSHARP: readonly [".cs"];
    readonly PHP: readonly [".php"];
};
export declare const FRAMEWORK_EXTENSIONS: {
    readonly REACT_JSX: readonly [".jsx"];
    readonly REACT_TSX: readonly [".tsx"];
    readonly VUE: readonly [".vue"];
    readonly SVELTE: readonly [".svelte"];
    readonly ASTRO: readonly [".astro"];
    readonly RAILS_ERB: readonly [".erb"];
    readonly EJS: readonly [".ejs"];
    readonly HANDLEBARS: readonly [".hbs", ".handlebars"];
    readonly BLAZOR: readonly [".razor"];
    readonly ASP_NET: readonly [".cshtml"];
    readonly LARAVEL: readonly [".blade.php"];
};
export declare const MARKUP_EXTENSIONS: {
    readonly HTML: readonly [".html", ".htm"];
    readonly CSS: readonly [".css", ".scss", ".sass", ".less"];
    readonly JSON: readonly [".json"];
    readonly YAML: readonly [".yml", ".yaml"];
    readonly XML: readonly [".xml"];
    readonly MARKDOWN: readonly [".md", ".mdx"];
    readonly TOML: readonly [".toml"];
};
export declare const ALL_FRAMEWORK_EXTENSIONS: (".jsx" | ".tsx" | ".vue" | ".svelte" | ".astro" | ".erb" | ".ejs" | ".hbs" | ".handlebars" | ".razor" | ".cshtml" | ".blade.php")[];
export declare const ALL_LOGIC_EXTENSIONS: (".js" | ".mjs" | ".cjs" | ".ts" | ".d.ts" | ".py" | ".pyw" | ".pyi" | ".go" | ".rs" | ".java" | ".c" | ".h" | ".cpp" | ".cxx" | ".cc" | ".hpp" | ".hxx" | ".rb" | ".cs" | ".php")[];
export declare const ALL_EXTENSIONS: (".js" | ".mjs" | ".cjs" | ".ts" | ".d.ts" | ".py" | ".pyw" | ".pyi" | ".go" | ".rs" | ".java" | ".c" | ".h" | ".cpp" | ".cxx" | ".cc" | ".hpp" | ".hxx" | ".rb" | ".cs" | ".php" | ".jsx" | ".tsx" | ".vue" | ".svelte" | ".astro" | ".erb" | ".ejs" | ".hbs" | ".handlebars" | ".razor" | ".cshtml" | ".blade.php" | ".html" | ".htm" | ".css" | ".scss" | ".sass" | ".less" | ".json" | ".yml" | ".yaml" | ".xml" | ".md" | ".mdx" | ".toml")[];
export declare function isFrameworkFile(filePath: string): boolean;
export declare function isLogicFile(filePath: string): boolean;
export declare const TEST_PATTERNS: {
    readonly FILE_PATTERNS: readonly [".test.", ".spec."];
    readonly DIRECTORY_PATTERNS: readonly ["/test/", "/tests/", "__tests__", "/fixtures/"];
    readonly NEXT_JS_SPECIAL: readonly ["_app.", "_document."];
};
export declare const ENCODING: {
    readonly UTF8: "utf-8";
};
export declare function isTestFile(filePath: string): boolean;
export declare function getFileCategory(filePath: string): 'logic' | 'framework' | 'markup' | 'unknown';
//# sourceMappingURL=file-types.d.ts.map