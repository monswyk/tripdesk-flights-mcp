#!/usr/bin/env node
const https = require('https');
const readline = require('readline');

const TOKEN = process.env.TRIPDESK_TOKEN;
const URL = 'https://flights.tripdesk.app/api/mcp';

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line) => {
  if (!line.trim()) return;

  let msg;
  try {
    msg = JSON.parse(line);
  } catch (e) {
    return;
  }

  const isNotification = msg.id === undefined || msg.id === null;
  const data = JSON.stringify(msg);

  const req = https.request(
    URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mcp-token': TOKEN,
      },
    },
    (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        if (!isNotification && body) {
          try {
            const resp = JSON.parse(body);
            if (resp.id !== null && resp.id !== undefined) {
              console.log(body);
            }
          } catch (e) {
            // ignore non-JSON
          }
        }
      });
    }
  );

  req.on('error', (e) => {
    if (!isNotification) {
      console.error('Request error:', e.message);
    }
  });

  req.write(data);
  req.end();
});
