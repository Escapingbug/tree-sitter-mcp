/**
 * Tree-sitter parser constants
 */
export declare const PARSER_NAMES: {
    readonly JAVASCRIPT: "javascript";
    readonly TYPESCRIPT: "typescript";
    readonly TSX: "tsx";
    readonly PYTHON: "python";
    readonly GO: "go";
    readonly RUST: "rust";
    readonly JAVA: "java";
    readonly C: "c";
    readonly CPP: "cpp";
    readonly RUBY: "ruby";
    readonly CSHARP: "c_sharp";
    readonly PHP: "php";
    readonly HTML: "html";
};
export declare const FUNCTION_TYPES: {
    readonly JAVASCRIPT: readonly ["function_declaration", "arrow_function", "method_definition"];
    readonly TYPESCRIPT: readonly ["function_declaration", "arrow_function", "method_definition"];
    readonly PYTHON: readonly ["function_definition"];
    readonly GO: readonly ["function_declaration", "method_declaration"];
    readonly RUST: readonly ["function_item"];
    readonly JAVA: readonly ["method_declaration"];
    readonly C: readonly ["function_definition", "function_declarator"];
    readonly CPP: readonly ["function_definition", "function_declarator"];
    readonly RUBY: readonly ["method"];
    readonly CSHARP: readonly ["method_declaration"];
    readonly PHP: readonly ["function_definition", "method_declaration"];
    readonly HTML: readonly [];
};
export declare const CLASS_TYPES: {
    readonly JAVASCRIPT: readonly ["class_declaration"];
    readonly TYPESCRIPT: readonly ["class_declaration", "interface_declaration"];
    readonly PYTHON: readonly ["class_definition"];
    readonly GO: readonly ["type_declaration"];
    readonly RUST: readonly ["struct_item", "enum_item", "trait_item"];
    readonly JAVA: readonly ["class_declaration", "interface_declaration"];
    readonly C: readonly ["struct_specifier"];
    readonly CPP: readonly ["class_specifier", "struct_specifier"];
    readonly RUBY: readonly ["class", "module"];
    readonly CSHARP: readonly ["class_declaration", "interface_declaration"];
    readonly PHP: readonly ["class_declaration"];
    readonly HTML: readonly [];
};
//# sourceMappingURL=parsers.d.ts.map