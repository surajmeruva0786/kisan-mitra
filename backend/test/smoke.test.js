// Smoke tests: spins up the real server as a child process and hits every route over HTTP.
// Run with `npm test`. No external test framework — node:test ships with Node 18+.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const path = require('node:path');

const PORT = 4099;
const BASE = `http://localhost:${PORT}`;
let server;

before(async () => {
  server = spawn(process.execPath, [path.join(__dirname, '..', 'src', 'index.js')], {
    env: { ...process.env, PORT: String(PORT), GEMINI_API_KEY: '' },
    stdio: 'pipe',
  });
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Server did not start in time')), 10000);
    server.stdout.on('data', (chunk) => {
      if (chunk.toString().includes('listening')) {
        clearTimeout(timeout);
        resolve();
      }
    });
    server.on('error', reject);
  });
});

after(() => {
  server.kill();
});

test('GET /api/health reports ok and rule-based mode', async () => {
  const res = await fetch(`${BASE}/api/health`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.status, 'ok');
  assert.equal(body.llm, 'rule-based');
});

test('GET /api/schemes returns a non-empty list', async () => {
  const res = await fetch(`${BASE}/api/schemes`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(body) && body.length > 0);
});

test('GET /api/schemes/:id localizes to Hindi', async () => {
  const res = await fetch(`${BASE}/api/schemes/pmkisan?lang=hi`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.name, 'पीएम-किसान');
});

test('GET /api/schemes/:id 404s for unknown scheme', async () => {
  const res = await fetch(`${BASE}/api/schemes/does-not-exist`);
  assert.equal(res.status, 404);
});

test('GET /api/crops/:cropId/calendar returns 5 stages', async () => {
  const res = await fetch(`${BASE}/api/crops/paddy/calendar`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.stages.length, 5);
});

test('GET /api/prices?search filters by crop', async () => {
  const res = await fetch(`${BASE}/api/prices?search=cotton`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.ok(body.every((row) => row.crop.toLowerCase().includes('cotton')));
});

test('GET /api/weather returns forecast and advisories', async () => {
  const res = await fetch(`${BASE}/api/weather`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.forecast.length, 7);
  assert.ok(body.advisories.length > 0);
});

test('POST /api/chat answers a weather question grounded in real data', async () => {
  const res = await fetch(`${BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'What is the weather today?', lang: 'en' }),
  });
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.intent, 'weather');
  assert.equal(body.source, 'rule');
  assert.match(body.reply.text, /°C/);
});

test('POST /api/chat 400s on missing message', async () => {
  const res = await fetch(`${BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert.equal(res.status, 400);
});
