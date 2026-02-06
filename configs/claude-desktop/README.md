# Claude Desktop configs

This folder contains ready-to-use config templates for Claude Desktop.

Steps:
1. Copy the config for your OS into your Claude Desktop config file.
2. Set the `TRIPDESK_TOKEN` environment variable for your session.
3. Ensure the bridge script exists at the configured path.

Notes:
- The `args` path in each config is a template. Update it if your bridge script
  lives elsewhere.
- Keep your token private. Do not commit it to git.
