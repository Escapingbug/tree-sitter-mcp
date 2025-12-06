/**
 * HTML and template tag constants
 */
export declare const HTML_TAGS: {
    readonly TEMPLATE: "<template";
    readonly TEMPLATE_CLOSE: "</template>";
    readonly SCRIPT: "<script";
    readonly SCRIPT_CLOSE: "</script>";
    readonly STYLE: "<style";
    readonly STYLE_CLOSE: "</style>";
    readonly COMMENT_START: "<!--";
    readonly COMMENT_MULTI_START: "/*";
    readonly COMMENT_SINGLE: "//";
};
export declare const TEMPLATE_PATTERNS: {
    readonly OPEN_TAG: RegExp;
    readonly CLOSE_TAG: RegExp;
    readonly SELF_CLOSING: RegExp;
};
export declare const NESTING_THRESHOLD: {
    readonly SHALLOW: 3;
    readonly MODERATE: 5;
    readonly DEEP: 8;
    readonly VERY_DEEP: 10;
};
//# sourceMappingURL=html-tags.d.ts.map