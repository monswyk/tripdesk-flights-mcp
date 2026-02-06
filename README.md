# tripdesk-flights-mcp
MCP bridge and configuration templates for TripDesk Flights (https://flights.tripdesk.app).

## What this repo contains
- Bridge
  - `bridge/tripdesk-bridge.js`: Node bridge that forwards MCP JSON-RPC to the hosted TripDesk Flights MCP endpoint.
- Config (general)
  - Templates for MCP clients, plus concrete examples below.

## Quick start
1. Copy the bridge script and make it executable:
   - `bridge/tripdesk-bridge.js`
2. Choose a config approach (general or example below).
3. Add your token.
4. Start your MCP client.

## Config (general)
You can configure any MCP client in one of two ways:
- Direct URL config:
  - `url`: `https://flights.tripdesk.app/api/mcp`
  - `headers`: `x-mcp-token: YOUR_TOKEN_HERE`
- Bridge config (for clients that require a local command):
  - `command`: `node`
  - `args`: path to `bridge/tripdesk-bridge.js`
  - `env`: `TRIPDESK_TOKEN=YOUR_TOKEN_HERE`

Templates:
- `configs/general/direct-url.json`
- `configs/general/bridge-command.json`
- `configs/general/curl.txt`

## Claude Desktop
Use the OS-specific templates:
- `configs/claude-desktop/claude_desktop_config.macos.json`
- `configs/claude-desktop/claude_desktop_config.windows.json`
- `configs/claude-desktop/claude_desktop_config.linux.json`

Update the bridge path and set `TRIPDESK_TOKEN` in your environment.

## Cursor setup
1. Copy `configs/cursor/mcp.json` into your Cursor MCP config.
2. Paste your token into the `x-mcp-token` header.
3. Save and restart Cursor.

## Configuration details
The bridge forwards requests to:
- `https://flights.tripdesk.app/api/mcp`

The token is sent as:
- `x-mcp-token` header

## Security notes
- Treat the token like a password.
- Never commit tokens to git.
- Revoke tokens you no longer need.

## Development
The bridge is a plain Node script and does not require build steps.

## Docs
- `docs/paths.md`: Common config paths by OS.
- `docs/troubleshooting.md`: Typical issues and fixes.
