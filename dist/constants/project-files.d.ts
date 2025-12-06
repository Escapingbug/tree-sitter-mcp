/**
 * Standard project files and configuration constants
 */
export declare const PROJECT_FILES: {
    readonly PACKAGE_MANAGERS: {
        readonly NPM: "package.json";
        readonly PNPM_WORKSPACE: "pnpm-workspace.yaml";
        readonly LERNA: "lerna.json";
        readonly MAVEN: "pom.xml";
        readonly GO: "go.mod";
        readonly CARGO: "Cargo.toml";
    };
    readonly VERSION_CONTROL: {
        readonly GIT: ".git";
    };
};
export declare const WORKSPACE_FILES: readonly ["package.json", "pnpm-workspace.yaml", "lerna.json"];
export declare const MONOREPO_INDICATORS: readonly ["package.json", "pnpm-workspace.yaml", "lerna.json", "pom.xml", "go.mod", "Cargo.toml"];
export declare function isWorkspaceFile(fileName: string): boolean;
export declare function isMonorepoIndicator(fileName: string): boolean;
//# sourceMappingURL=project-files.d.ts.map