/**
 * MCP tool and resource schemas - consistent parameter support across all tools
 */
export declare const MCP_TOOLS: ({
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            query: {
                type: string;
                description: string;
            };
            projectId: {
                type: string;
                description: string;
            };
            directory: {
                type: string;
                description: string;
            };
            pathPattern: {
                type: string;
                description: string;
            };
            maxResults: {
                type: string;
                description: string;
                default: number;
            };
            fuzzyThreshold: {
                type: string;
                description: string;
                default: number;
            };
            exactMatch: {
                type: string;
                description: string;
                default: boolean;
            };
            types: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            identifier?: undefined;
            caseSensitive?: undefined;
            ignoreDirs?: undefined;
            analysisTypes?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            identifier: {
                type: string;
                description: string;
            };
            projectId: {
                type: string;
                description: string;
            };
            directory: {
                type: string;
                description: string;
            };
            pathPattern: {
                type: string;
                description: string;
            };
            caseSensitive: {
                type: string;
                description: string;
                default: boolean;
            };
            exactMatch: {
                type: string;
                description: string;
                default: boolean;
            };
            maxResults: {
                type: string;
                description: string;
                default: number;
            };
            query?: undefined;
            fuzzyThreshold?: undefined;
            types?: undefined;
            ignoreDirs?: undefined;
            analysisTypes?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            projectId: {
                type: string;
                description: string;
            };
            directory: {
                type: string;
                description: string;
            };
            pathPattern: {
                type: string;
                description: string;
            };
            ignoreDirs: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            analysisTypes: {
                type: string;
                items: {
                    type: string;
                    enum: string[];
                };
                description: string;
                default: string[];
            };
            maxResults: {
                type: string;
                description: string;
                default: number;
            };
            query?: undefined;
            fuzzyThreshold?: undefined;
            exactMatch?: undefined;
            types?: undefined;
            identifier?: undefined;
            caseSensitive?: undefined;
        };
        required: string[];
    };
} | {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            projectId: {
                type: string;
                description: string;
            };
            directory: {
                type: string;
                description: string;
            };
            pathPattern: {
                type: string;
                description: string;
            };
            maxResults: {
                type: string;
                description: string;
                default: number;
            };
            query?: undefined;
            fuzzyThreshold?: undefined;
            exactMatch?: undefined;
            types?: undefined;
            identifier?: undefined;
            caseSensitive?: undefined;
            ignoreDirs?: undefined;
            analysisTypes?: undefined;
        };
        required: never[];
    };
})[];
export declare const MCP_RESOURCES: {
    uri: string;
    name: string;
    description: string;
    mimeType: string;
}[];
//# sourceMappingURL=schemas.d.ts.map