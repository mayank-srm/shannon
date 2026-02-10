declare module '../../mcp-server/dist/index.js' {
  export interface ShannonHelperServer {
    type: 'stdio'
    command: string
    args: string[]
    env: Record<string, string>
  }

  export function createShannonHelperServer(sourceDir: string): ShannonHelperServer
}
