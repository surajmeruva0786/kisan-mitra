# Kisan-Mitra — Project Context

## Change Log Policy
**Every update/change to this project gets documented here first, then commit+push, EVERY time. No batching.**

---

## What This Project Is

Kisan-Mitra = AI chatbot for Indian farmers. Multilingual (Hindi/English + regional), answers on govt schemes, crop advisory, market prices, farming practices. Goal: bridge digital divide for rural/smallholder farmers who lack real-time agronomic/policy info.

Two source materials define this project:
1. **Research paper** (in this repo, IEEE TENCON 2025) — theoretical/architectural vision: "GAT" model.
2. **Live GitHub repo** (JuliusR8ll/Kisan-Mitra) — actual shipped implementation, simpler PaLM-based chatbot.

These two are related but NOT identical in sophistication — paper describes an ambitious custom transformer; repo is a more practical PaLM API wrapper. Treat paper as research/vision layer, repo as current implementation layer.

---

## Research Paper Summary

**Title:** Kisan-Mitra: Empowering Farmers with AI-driven Generative Assistance Transformer Network for Agricultural Advancement
**Authors:** Aditya Oza, Rahul Yadav, Dr. Mallikharjuna Rao K, Rimjhim Sharma — IIIT Naya Raipur
**Venue:** IEEE TENCON 2025 (Region 10 Conference), DOI 10.1109/TENCON66050.2025.11375201

### Core Idea
Introduces **GAT (Generative Agricultural Transformer)** — custom transformer arch powering Kisan-Mitra chatbot. Not generic BERT/GPT — domain-adapted.

### GAT Architecture Components
- **Custom Embedding Layer** — crop names, pest types, agro-practices, regional linguistic tokens (Hindi, Marathi, Telugu, etc). Handles code-mixed/transliterated queries.
- **AgriAttention Mechanism** — modified attention emphasizing agri-semantic patterns like `[Crop, Season, Pest]` triplets or `[Subsidy, Eligibility, Location]` relations.
- **Schema-aware Encoder** — reasons over structured/tabular data (scheme eligibility, subsidy amounts, timelines).

### Data Pipeline
- Source: **KCC (Kisan Call Centre) dataset** (https://kcc-chakshu.icar.gov.in) — real farmer queries + expert answers. Fields: BlockName, DistrictName, StateName, CreatedOn, Season, Category, Crop, QueryType, Sector, QueryText, KccAns.
- Also: govt advisories, agricultural blogs/forums, scheme manuals.
- Augmentation: **Back-Translation** (regional→English→regional via multilingual LLMs), **Noise Injection** (simulates typos/phonetic errors from speech-to-text/rural input).
- Scheme grounding: policy PDFs → structured triples (e.g. `[PM-Kisan, Benefit, 6000/year]`), fused into generation context to reduce hallucination.

### Results Claimed
- Response accuracy **89.6%**, covers **85%+** of key agri topics.
- Per-language F1: Hindi-English code-mixed 91.0%, Marathi 88.3%, Telugu 86.4%, English 92.1%.
- Beats baselines: RNN (74.6% F1), BERT-base (82.3%), GPT-2 fine-tuned (86.7%) → GAT 91.0%.
- Latency: ~190ms (vs 320-480ms competitors); quantization-aware training cut latency further ~30%.
- Deployment: containerized REST API, web+mobile, offline mode "planned" for low-connectivity regions.

### Competitive Landscape (from paper's related work)
Existing agri-chatbots (Krushi, AgriAid, FARMER'S ASSISTANT, AgroBot, SMART KISAN, AGRIBOT, etc.) fall short on: domain adaptation, multilingual/code-mixed support, structured govt-data grounding. Kisan-Mitra's pitch is doing all three at once.

### Qualitative Examples (paper)
- Code-mixed query "PM-Kisan ka form kab tak bhara ja sakta hai?" → GAT gives grounded specific answer (registration open year-round, apply via CSC), vs GPT-2 giving generic "refer to official sources."

---

## GitHub Repo Summary (JuliusR8ll/Kisan-Mitra)

**URL:** https://github.com/JuliusR8ll/Kisan-Mitra
**Live demo:** https://kisanmitra-2.vercel.app/
**Demo video:** https://youtu.be/QOcq4nlpvb0

### Actual Implementation (differs from paper's GAT vision)
- Chatbot backend uses **Google AI's PaLM** (not a custom-trained transformer like GAT described in paper) — i.e. current repo is likely an earlier/simpler prototype or a practical MVP layer sitting in front of the research concept.
- Frontend: **React** (Vite + Tailwind CSS + PostCSS), JS 94.4%, CSS 3.6%, HTML 2.0%.
- Deployed on **Vercel**; also has Docker containerization for portable deployment (README mentions pulling from Docker Hub).
- Repo is small: 6 commits, fresh/early-stage.

### Structure
```
├── dist/                  # build output
├── public/                # static assets
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Chat.jsx                # chat interface logic
│   │   ├── FormatApiResponse.jsx   # formats PaLM API responses for display
│   │   ├── Front.jsx               # landing/entry component
│   │   ├── Home.jsx                # main dashboard/home view
│   │   └── index.js
│   ├── App.jsx / App.css
│   ├── main.jsx
│   └── index.css
├── package.json / package-lock.json
├── vite.config.js, tailwind.config.js, postcss.config.js
└── vercel.json
```

### Key Features (per repo README)
- Hindi + English Q&A.
- Integrates govt databases + agri knowledge bases for answers.
- Covers crop selection, pest management, irrigation, weather.
- Surfaces links to external resources/research papers.

---

## Gap Between Paper and Repo (important for future work)

| Aspect | Paper (GAT) | Repo (current) |
|---|---|---|
| Model | Custom domain-trained transformer w/ AgriAttention | Google PaLM (general LLM API) |
| Languages | 12 Indian languages + code-mix | Hindi + English only |
| Grounding | Structured triples from scheme PDFs fused at training time | Unclear — likely prompt-time context only |
| Data | KCC dataset + augmentation pipeline | Not evident in repo |
| Frontend | Web/mobile/offline-planned | React SPA on Vercel, Docker for self-host |

If asked to "implement the paper" or "close the gap," this table is the punch list: fine-tuning/custom model work, expanding language support, and building real scheme-data grounding are the big unshipped pieces.

---

## Current Build — Full-Stack Rebuild (in progress)

The `kisan-mitra-frontend/` directory holds a **Claude Design Sync prototype** (`.dc.html` + `support.js`), not deployable app source — it needs its own runtime and can't be built with Vite. It's kept as the design reference (branding, copy, all 12-language strings, mock domain data) but is not what ships.

Building a real full-stack app from scratch:
- `backend/` — Node.js + Express REST API (`npm install && npm run dev`, port 4000)
- `frontend/` — React + Vite + Tailwind SPA (to be added)

### Change Log
- **2026-08-02**: Scaffolded `backend/` — Express app, CORS, dotenv, `/api/health`, error handler, `.env.example`. Verified server boots and responds on port 4000.
- **2026-08-02**: Ported domain data from the design prototype into `backend/src/data/` — languages (12), crops + crop calendars, govt schemes (structured facts for grounding), market price rows, weather/forecast/advisories. All localized `{en, te, hi}` strings preserved verbatim. This is the "schema-aware grounding" data the paper describes, now living server-side instead of hardcoded in a frontend prototype.
- **2026-08-02**: Added `GET /api/schemes` (list, filterable by `level`), `GET /api/schemes/:id` (detail), `GET /api/crops`, `GET /api/crops/:cropId/calendar`, `GET /api/languages` — all accept `?lang=` and localize server-side. Verified against a live server with curl for en/hi/te.
- **2026-08-02**: Added `GET /api/prices` (searchable, localized crop names) + `GET /api/prices/:id` (with nearby-market comparison) and `GET /api/weather` (current conditions, 7-day forecast, localized advisories/alert). Verified with curl.
- **2026-08-02**: Added `POST /api/chat`. Core design: a rule-based `chatEngine.js` classifies intent (weather/prices/schemes/calendar/pest/greeting) by keyword (incl. common romanized Hindi terms) and builds a reply **directly from the ported data modules** — never invented text — this is the always-on, zero-cost, zero-hallucination path and is what runs when no LLM key is set. When `GEMINI_API_KEY` is configured, `lib/llm.js` asks Gemini to *phrase* the same grounded facts more naturally, with the rule-based reply as an automatic fallback on any API error/timeout. This directly implements the paper's "schema-aware grounding to reduce hallucination" idea, just with a real pluggable LLM instead of the paper's custom GAT model. Verified all 6 intents + the 400 validation path with curl, with no API key set.
- **2026-08-02**: Hardened `index.js` — request logging middleware, `/api/health` now reports which chat responder is active (`gemini` vs `rule-based`), startup log prints chat mode + allowed CORS origins, error handler hides internal messages when `NODE_ENV=production`.

---

## Working Agreement

- Every change (code, docs, config) → update this CLAUDE.md with what changed and why → commit → push. Every single time, no batching multiple changes into one commit.
