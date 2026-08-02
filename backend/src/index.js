require('dotenv').config();
const express = require('express');
const cors = require('cors');
const llm = require('./lib/llm');

const app = express();
const isProd = process.env.NODE_ENV === 'production';

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`);
  });
  next();
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'kisan-mitra-backend',
    time: new Date().toISOString(),
    llm: llm.isConfigured() ? 'gemini' : 'rule-based',
  });
});

app.use('/api', require('./routes'));

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: isProd ? 'Internal server error' : err.message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Kisan-Mitra backend listening on http://localhost:${PORT}`);
  console.log(`Chat responder: ${llm.isConfigured() ? `Gemini (${process.env.GEMINI_MODEL || 'gemini-1.5-flash'})` : 'rule-based (no GEMINI_API_KEY set)'}`);
  console.log(`Allowed CORS origins: ${allowedOrigins.join(', ')}`);
});

module.exports = app;
