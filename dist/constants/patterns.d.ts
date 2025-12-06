/**
 * Regular expression patterns and escape sequences
 */
export declare const REGEX_PATTERNS: {
    readonly ESCAPE_SPECIAL_CHARS: "\\$&";
    readonly PATH_SEPARATOR: "/";
    readonly ARGUMENT_LIST: "argument_list";
};
export declare const QUALITY_CATEGORIES: {
    readonly UNNECESSARY_ABSTRACTION: "unnecessary_abstraction";
    readonly EXCESSIVE_ABSTRACTION: "excessive_abstraction";
    readonly HIGH_COMPLEXITY: "high_complexity";
    readonly LONG_METHOD: "long_method";
    readonly MAGIC_STRING: "magic_string";
    readonly MAGIC_NUMBER: "magic_number";
    readonly DEEP_NESTING: "deep_nesting";
    readonly PARAMETER_OVERLOAD: "parameter_overload";
    readonly GOD_CLASS: "god_class";
};
export declare const IMPORT_PATTERNS: {
    readonly ANALYSIS_SCHEME: "analysis://";
    readonly PATH_JOIN_PATTERN: ").slice(0, -1).join(";
};
export declare function escapeRegExp(string: string): string;
//# sourceMappingURL=patterns.d.ts.map