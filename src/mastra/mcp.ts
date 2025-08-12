import { MCPClient } from "@mastra/mcp";
 
// Configure MCPClient to connect to your server(s)
export const mcp = new MCPClient({
    servers: {
        'n8n-railway': {
        'command': 'npx',
        'args': [
          '-y',
          'mcp-remote',
          process.env.N8N_MCP_URL!,
          '--header',
          'Authorization: Bearer ' + process.env.N8N_MCP_TOKEN!
        ]
      }
    },
});