# Kisan-Mitra

An AI chatbot for Indian farmers — multilingual (Hindi, Telugu, English, and 9 more Indian
languages), answering questions on government schemes, crop advisory, market prices, weather,
and farming practices. Built to bridge the digital divide for rural and smallholder farmers who
lack real-time agronomic and policy information.

This project is based on the research paper *"Kisan-Mitra: Empowering Farmers with AI-driven
Generative Assistance Transformer Network for Agricultural Advancement"* (IEEE TENCON 2025) —
see [`CLAUDE.md`](CLAUDE.md) for the full paper summary and how this implementation relates to it.

## Architecture

```
kisan-mitra/
├── backend/                # Node.js + Express REST API
│   └── src/
│       ├── data/            # Ported domain data: schemes, crops, prices, weather, languages
│       ├── lib/              # chatEngine (rule-based grounding), llm (pluggable Gemini), localize
│       └── routes/           # /api/schemes, /api/crops, /api/prices, /api/weather, /api/chat
├── frontend/                # React + Vite + Tailwind CSS SPA
│   └── src/
│       ├── i18n/             # Language strings + LanguageContext
│       ├── context/          # ProfileContext (onboarding profile, localStorage-backed)
│       ├── layout/           # AppShell (sidebar/bottom-nav)
│       ├── pages/            # Onboarding, Chat, Schemes, Calendar, Prices, Weather, Settings
│       ├── components/       # Logo + reusable UI kit (Button, Card, Toggle, Pill)
│       └── lib/api.js        # Fetch wrapper for the backend
└── kisan-mitra-frontend/    # Design reference only (Claude Design Sync prototype) — not shipped
```

The chat endpoint is **grounded by design**: every reply is built directly from the structured
domain data in `backend/src/data/` (scheme amounts, prices, weather), never invented. When
`GEMINI_API_KEY` is set, an LLM phrases those same grounded facts more naturally; when it isn't,
a rule-based responder answers directly — the app works fully with zero external API keys.

## Prerequisites

- Node.js 18+ (tested on Node 22)
- npm

## Setup

### Backend

```bash
cd backend
npm install
cp .env.example .env   # optional — defaults work with no changes
npm run dev             # http://localhost:4000
```

Run the smoke test suite anytime with `npm test` (spins up the real server and hits every route).

### Frontend

```bash
cd frontend
npm install
npm run dev             # http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:4000`, so with both `npm run dev`
processes running you get a fully working app with no extra configuration.

## Environment variables

**`backend/.env`** (see `backend/.env.example`):

| Variable | Default | Purpose |
|---|---|---|
| `PORT` | `4000` | API server port |
| `CORS_ORIGIN` | `http://localhost:5173` | Comma-separated allowed origins |
| `GEMINI_API_KEY` | *(unset)* | Enables LLM-phrased chat replies via Google Gemini. Unset = rule-based responder, no cost, no external calls. |
| `GEMINI_MODEL` | `gemini-1.5-flash` | Gemini model to use |

**`frontend/.env`** (see `frontend/.env.example`):

| Variable | Default | Purpose |
|---|---|---|
| `VITE_API_BASE_URL` | *(unset, uses dev proxy)* | Set for production builds pointing at a deployed backend |

## Supported languages

English, Hindi, and Telugu are fully localized end-to-end (UI strings, scheme/crop/weather data,
and chat intent matching including common romanized Hindi terms). Tamil, Kannada, Marathi,
Bengali, Gujarati, Punjabi, Odia, Malayalam, and Urdu are selectable in the UI (nav labels
localized) and fall back to English for content — see the gap table in `CLAUDE.md` for what full
coverage of all 12 languages would take.

## Project status

See [`CLAUDE.md`](CLAUDE.md) for the full change log, the paper-vs-implementation gap analysis,
and what's next.
