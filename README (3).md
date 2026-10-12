# RCCG Open Door Parish, Region 64
Church website and API starter arranged for GitHub + Render.

`index.html` is at the repository root and contains the complete homepage HTML, CSS and JavaScript in one file. It can be opened directly for a visual preview. Database-backed features, AI, secure forms and admin operations require the backend and configured services.

## Local setup
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env` and fill in local values.
3. Run `npm install`, then `npm run db:migrate`, then `npm run dev`.
4. Check `/api/health`.
5. Open `index.html` to preview the standalone homepage.

## Deployment
Push the repository to GitHub. Deploy the Node API to Render and attach PostgreSQL. GitHub Pages can serve the root-level static homepage but cannot run Node.js. See `docs/DEPLOYMENT.md`.

No real church details are invented. Add verified service times, contacts, address, leadership and events before launch. This starter is not fully production-ready: unfinished workflows return an explicit not-configured response and must be implemented/tested before public use. Never commit `.env` or API keys.
