# Troubleshooting

## Invalid token / 401
- Ensure the token is valid and not revoked.
- Check that the `x-mcp-token` header is present.

## Bridge does not start
- Verify Node.js is installed and available as `node`.
- Check the path to `bridge/tripdesk-bridge.js`.
- Make sure the script is executable.

## No tools listed
- Confirm the MCP endpoint URL is reachable:
  `https://flights.tripdesk.app/api/mcp`
- Check for IP allowlist restrictions in your token settings.
