# Agentflow_AI MVP

A same-day, local-first demonstration of an agentic automation platform. Operators can register, generate a visual workflow from a prompt, save it, run a five-agent simulated execution, and inspect the persisted timeline.

## Stack

- Frontend: Next.js Pages Router, React, Tailwind, Zustand, Axios, React Flow, lucide-react
- Backend: Express, JWT, bcryptjs, helmet, CORS, express-validator
- Storage: in-memory fallback for a zero-service local demo. MongoDB is reserved for the production extension.

## Run locally

1. Copy `.env.example` to `.env` and set a strong `JWT_SECRET`.
2. Install dependencies: `npm install`, `npm install --prefix server`, `npm install --prefix client`.
3. Start both applications: `npm run dev`.
4. Open `http://localhost:3000`.

The backend health check is `http://localhost:5000/api/health`.

## Test flow

Register → Dashboard → Create workflow → enter “Send an email when a new lead is created” → Generate → Save → Execute → inspect all five timeline events.

## MVP limitations

No production OAuth, third-party API calls, queue, Socket.IO stream, or durable MongoDB adapter is included. Integrations display as `Demo / Not Connected`; execution is intentionally simulated and reliable without API keys.

## GitHub commands

```powershell
git init
git add .
git commit -m "Build Agentflow AI MVP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/agentflow-ai.git
git push -u origin main
```

## Deployment

Deploy `client` to Vercel with `NEXT_PUBLIC_API_URL` set to the deployed server URL plus `/api`. Deploy `server` to Render/Railway with `PORT`, `CLIENT_URL`, and `JWT_SECRET` configured. Never commit `.env`.
