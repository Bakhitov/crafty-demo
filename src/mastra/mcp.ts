import { MCPClient } from "@mastra/mcp";
 
// Configure MCPClient to connect to your server(s)
export const mcp = new MCPClient({
    servers: {
        'n8n-railway': {
        'command': 'npx',
        'args': [
          '-y',
          'mcp-remote',
          'https://czlonkowskin8n-mcp-railwaylatest-production-8484.up.railway.app/mcp',
          '--header',
          'Authorization: Bearer 9wdnT8kz6u7x389l7AZc4rXGLf+y89OeNXDXJioRk5Y='
        ]
      }
    },
});