# Kisan-Mitra — Project Context

## Change Log Policy
**Every update/change to this project gets documented here first, then commit+push, EVERY time. No batching.**

---

## What This Project Is

Kisan-Mitra = AI chatbot for Indian farmers. Multilingual (Hindi/English + regional), answers on govt schemes, crop advisory, market prices, farming practices. Goal: bridge digital divide for rural/smallholder farmers who lack real-time agronomic/policy info.

Three source materials define this project, in increasing order of relevance to what's actually in this repo today:
1. **Research paper** (in this repo, IEEE TENCON 2025) — theoretical/architectural vision: the "GAT" model. See below.
2. **Old external GitHub repo** (JuliusR8ll/Kisan-Mitra) — a *different, earlier* prototype (simple PaLM-wrapper React SPA). Summarized below for historical context only; none of its code is in this repo.
3. **This repo's actual implementation** — a full-stack app (`backend/` + `frontend/`) built from scratch, described in "Current Implementation" below. This is what to read/run/extend for any real work on the project.

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

## Gap Between Paper and the Old External Repo (historical context only)

This table describes the *old* JuliusR8ll/Kisan-Mitra prototype mentioned above — kept for
historical context, since none of its code is in this repo. **For the gap that actually matters
now, see "Gap Between Paper and This Implementation" below**, which describes what's really here.

| Aspect | Paper (GAT) | Old external repo |
|---|---|---|
| Model | Custom domain-trained transformer w/ AgriAttention | Google PaLM (general LLM API) |
| Languages | 12 Indian languages + code-mix | Hindi + English only |
| Grounding | Structured triples from scheme PDFs fused at training time | Unclear — likely prompt-time context only |
| Data | KCC dataset + augmentation pipeline | Not evident in repo |
| Frontend | Web/mobile/offline-planned | React SPA on Vercel, Docker for self-host |

---

## Current Implementation (this repo)

The `kisan-mitra-frontend/` directory holds a **Claude Design Sync prototype** (`.dc.html` + `support.js`), not deployable app source — it needs its own runtime and can't be built with Vite. It was used as the design reference (branding, copy, all 12-language strings, mock domain data) while building the real app below, and is kept around for that reason, but it is not what ships.

**What ships**, both fully built and wired end-to-end (see `README.md` for setup/run instructions):
- `backend/` — Node.js + Express REST API (port 4000). Routes: `/api/schemes`, `/api/crops`, `/api/crops/:cropId/calendar`, `/api/prices`, `/api/weather`, `/api/languages`, `/api/chat`. Chat is grounded on real structured data (never invents scheme amounts/prices), with an optional pluggable Gemini LLM for more natural phrasing of the same grounded facts. `npm test` runs a 9-case smoke suite.
- `frontend/` — React + Vite + Tailwind v4 SPA. Onboarding (5 steps) → app shell with 6 screens (Chat, Schemes, Crop Calendar, Market Prices, Weather, Settings), all wired to the real backend, profile persisted to `localStorage`, 3 languages (en/te/hi) fully localized with 9 more selectable at the nav level.

**Known gaps / not yet done:**
- No live browser QA was possible this session (no Chrome extension available) — UI correctness is verified by build success + code review only. Recommend a manual pass in an actual browser before considering the UI production-ready.
- No deployment config yet (Vercel/Docker) — currently dev-only (`npm run dev` in both `backend/` and `frontend/`).
- Chat history isn't persisted across reloads (by design, matching the source prototype) — could be added if wanted.
- Full localization (all 12 languages, not just en/te/hi) is unstarted — see the updated gap table below.

### Gap Between Paper and This Implementation

| Aspect | Paper (GAT) | This implementation |
|---|---|---|
| Model | Custom domain-trained transformer w/ AgriAttention | Rule-based grounded responder by default; optional pluggable Gemini for phrasing — no custom-trained model |
| Languages | 12 Indian languages + code-mix | 3 fully localized (en/te/hi, incl. romanized Hindi keyword matching) + 9 more nav-only |
| Grounding | Structured triples from scheme PDFs fused at training time | Structured JS data modules (schemes/crops/prices/weather) fused into every reply at request time — same idea, simpler mechanism, real and working today |
| Data | KCC dataset + augmentation pipeline | Hand-authored scheme/crop/price/weather data (ported from the design prototype); no KCC dataset ingestion |
| Frontend | Web/mobile/offline-planned | React SPA (web only, no offline mode yet) |

Closing the model-sophistication gap (fine-tuning a real domain model, KCC dataset ingestion, full 12-language coverage) remains future work; the grounding *architecture* the paper describes is now real and running, just implemented more simply than a custom transformer.

### Change Log
- **2026-08-02**: Scaffolded `backend/` — Express app, CORS, dotenv, `/api/health`, error handler, `.env.example`. Verified server boots and responds on port 4000.
- **2026-08-02**: Ported domain data from the design prototype into `backend/src/data/` — languages (12), crops + crop calendars, govt schemes (structured facts for grounding), market price rows, weather/forecast/advisories. All localized `{en, te, hi}` strings preserved verbatim. This is the "schema-aware grounding" data the paper describes, now living server-side instead of hardcoded in a frontend prototype.
- **2026-08-02**: Added `GET /api/schemes` (list, filterable by `level`), `GET /api/schemes/:id` (detail), `GET /api/crops`, `GET /api/crops/:cropId/calendar`, `GET /api/languages` — all accept `?lang=` and localize server-side. Verified against a live server with curl for en/hi/te.
- **2026-08-02**: Added `GET /api/prices` (searchable, localized crop names) + `GET /api/prices/:id` (with nearby-market comparison) and `GET /api/weather` (current conditions, 7-day forecast, localized advisories/alert). Verified with curl.
- **2026-08-02**: Added `POST /api/chat`. Core design: a rule-based `chatEngine.js` classifies intent (weather/prices/schemes/calendar/pest/greeting) by keyword (incl. common romanized Hindi terms) and builds a reply **directly from the ported data modules** — never invented text — this is the always-on, zero-cost, zero-hallucination path and is what runs when no LLM key is set. When `GEMINI_API_KEY` is configured, `lib/llm.js` asks Gemini to *phrase* the same grounded facts more naturally, with the rule-based reply as an automatic fallback on any API error/timeout. This directly implements the paper's "schema-aware grounding to reduce hallucination" idea, just with a real pluggable LLM instead of the paper's custom GAT model. Verified all 6 intents + the 400 validation path with curl, with no API key set.
- **2026-08-02**: Hardened `index.js` — request logging middleware, `/api/health` now reports which chat responder is active (`gemini` vs `rule-based`), startup log prints chat mode + allowed CORS origins, error handler hides internal messages when `NODE_ENV=production`.
- **2026-08-02**: Added `backend/test/smoke.test.js` (Node's built-in `node:test`, no extra dependency) — spawns the real server as a child process and exercises health, schemes (list/detail/404/localization), crop calendar, price search, weather, and all chat validation paths over real HTTP. `npm test` runs it. 9/9 passing.
- **2026-08-02**: Scaffolded `frontend/` — Vite + React 19 + Tailwind CSS v4 (using the `@tailwindcss/vite` plugin, not the old PostCSS config — v4 is CSS-first) + `react-router-dom` (pinned to latest 7.18.2 to dodge two npm-audit advisory ranges that together span nearly all of 7.x; the flagged issues are all SSR/RSC/server-action related and don't apply to our plain client-side SPA routing, but latest was still the safer/patched choice). Dev server proxies `/api/*` to the backend on port 4000. Removed default Vite template cruft (counter demo, logos). Verified `npm run build` and `npm run dev` both work cleanly.
- **2026-08-02**: Added `frontend/src/components/Logo.jsx` (the brand mark, ported from the design prototype's inline SVG) and a small `components/ui/` kit — `Button` (primary/secondary/ghost), `Card`, `Toggle` (switch), `Pill` (filter chip) — built on the brand color tokens from `index.css`. Every screen (onboarding, chat, schemes, settings, etc.) will compose from these instead of re-implementing styled buttons/switches each time.
- **2026-08-02**: Added `frontend/src/i18n/` — ported the full `UI` string dictionary (en/te/hi, matching backend localization) and `NAV_FALLBACK` (nav labels only, for the other 9 supported languages) from the design prototype, plus a `LanguageContext` with `t(key)` and `localize(map)` helpers and `SPEECH_LANG` codes for future voice input. Language choice persists to `localStorage`. Wired into `main.jsx`/`App.jsx` and verified via build.
- **2026-08-02**: Added `frontend/src/layout/AppShell.jsx` — desktop sidebar / mobile bottom-nav layout (matching the design prototype's nav icons/labels) with `react-router-dom` routing to 6 stub pages (Chat/Schemes/Calendar/Prices/Weather/Settings under `src/pages/`), fleshed out one-by-one over the next several steps. Verified via `npm run build`. Note: no browser tool is available in this session (user declined the Chrome extension), so this and later UI steps are verified by build success + code review only, not a live screenshot — flagged to the user as a gap to check manually.
- **2026-08-02**: Added `frontend/src/lib/api.js` (fetch wrapper for all backend endpoints, `VITE_API_BASE_URL`-aware) and `frontend/src/context/ProfileContext.jsx` (profile state — name/state/district/crops/land size/accessibility prefs/notifications/`onboardingComplete` — persisted to `localStorage`, also drives the `--fs-mult` CSS var for text-size accessibility scaling). Built `OnboardingPage.jsx`: 5-step flow (welcome → language → state → farm profile → accessibility) matching the design prototype, crops list fetched live from `/api/crops`. Wired a `RequireOnboarding` route guard into `App.jsx` so the app shell redirects to `/onboarding` until setup is complete. Verified via build.
- **2026-08-02**: Built the real `ChatPage.jsx` — message list, quick-action chips, text input, and a Web Speech API mic button, wired to `POST /api/chat`. Quick-action buttons send the localized button label itself as the chat message (e.g. Telugu "ఈరోజు వాతావరణం") rather than a fixed English phrase, since the backend's intent regexes already match the relevant en/te/hi keywords — this keeps the visible chat bubble true to what the user "asked" in their own language while still hitting the right grounded intent. Verified via build; live runtime behavior not visually confirmed (no browser tool available this session).
- **2026-08-02**: Built the real `SchemesPage.jsx` — level filter pills (all/central/AP/TS) over a card grid from `GET /api/schemes`, tapping a card loads the full detail (benefit/eligibility/numbered how-to-apply steps/required documents/tap-to-call helpline) from `GET /api/schemes/:id`. Verified via build.
- **2026-08-02**: Built the real `CalendarPage.jsx` — crop picker (defaults to the farmer's first onboarding crop) over a numbered stage timeline from `GET /api/crops/:cropId/calendar`. Verified via build.
- **2026-08-02**: Built the real `PricesPage.jsx` — debounced (250ms) search over `GET /api/prices`, trend-colored price cards, tap-through detail view with nearby-market comparison from `GET /api/prices/:id`. Verified via build.
- **2026-08-02**: Built the real `WeatherPage.jsx` — current conditions card, alert banner, 7-day forecast strip, localized advisories, from `GET /api/weather`. While wiring it up, found `GET /api/weather` was only returning a localized `conditionLabel` string for current conditions with no raw `condition` key to pick an icon from (the forecast array had one, current conditions didn't) — added `condition` to that response. Re-ran the backend smoke suite (still 9/9) and the frontend build after the fix.
- **2026-08-02**: Built the real `SettingsPage.jsx` — profile summary with an "Edit Profile" deep-link back into onboarding step 3, language picker, accessibility toggles, notification toggles, tap-to-call helpline, and "Replay Onboarding Tour". Extended `OnboardingPage` to read an initial `step` and `returnTo` path from router `location.state` so both of these deep-links land on the right step and return to Settings (not the chat home) when finished, instead of always restarting from step 0 and landing on `/`. All 6 screens (Chat/Schemes/Calendar/Prices/Weather/Settings) are now built and wired to the real backend. Verified via build.
- **2026-08-02**: Closed a gap where the `highContrast` and `voiceAssist` profile toggles were being saved but doing nothing. `ProfileContext` now toggles a `high-contrast` class on `<html>` (with matching CSS overrides in `index.css` for darker muted text/borders) whenever `highContrast` is on, and `ChatPage`'s mic button now only renders when `voiceAssist` is on. Verified via build.
- **2026-08-02**: Added `frontend/.env.example` documenting `VITE_API_BASE_URL` (only needed for production builds pointed at a deployed backend — local dev uses the Vite proxy from step 8 and needs no env var at all) and added `.env` to `frontend/.gitignore` (Vite's default template only ignored `*.local`, not plain `.env`).
- **2026-08-02**: Rewrote the root `README.md` (previously just a title) — architecture diagram, setup steps for both `backend/` and `frontend/`, env var tables, and a note on which languages are fully localized vs nav-only.
- **2026-08-02**: Restructured this file's top-level sections to reflect that the full-stack rebuild is the primary implementation now, not a work-in-progress alongside the paper/old-repo summaries: renamed "Current Build" → "Current Implementation (this repo)" with a "what ships / known gaps" summary, relabeled the old paper-vs-JuliusR8ll-repo gap table as historical context, and added a new "Gap Between Paper and This Implementation" table reflecting the real current state.

---

## Working Agreement

- Every change (code, docs, config) → update this CLAUDE.md with what changed and why → commit → push. Every single time, no batching multiple changes into one commit.
