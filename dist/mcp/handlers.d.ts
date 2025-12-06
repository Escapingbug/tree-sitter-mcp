/**
 * MCP tool request handlers - simplified from complex handler system
 */
import type { JsonObject } from '../types/core.js';
export declare function clearMCPMemory(): void;
interface MCPToolParams {
    name: string;
    arguments?: JsonObject;
}
interface MCPToolRequest {
    params: MCPToolParams;
}
interface MCPToolResult {
    content: Array<{
        type: 'text';
        text: string;
    }>;
    [key: string]: unknown;
}
export declare function handleToolRequest(request: MCPToolRequest): Promise<MCPToolResult>;
export {};
//# sourceMappingURL=handlers.d.ts.map