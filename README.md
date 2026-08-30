# Agentflow_AI

### Agentic AI Automation Platform

**Describe it. Watch it run.**

Agentflow_AI is an AI-powered workflow automation platform MVP that converts natural-language automation requests into visual workflows and executes them through a five-agent pipeline.

The platform demonstrates how cooperating AI agents can plan, execute, validate, recover, and monitor an automation while giving the user a clear execution timeline.

## 🚀 Live Demo

**Frontend:**
https://agentflow-ai-frontend.onrender.com/

**Backend:**
https://agentflow-ai-b96h.onrender.com/

**Backend Health Check:**
https://agentflow-ai-b96h.onrender.com/api/health

## 🎯 Problem

Automation tools can be difficult to configure because users often need to manually define triggers, actions, conditions, and execution logic.

Agentflow_AI explores a simpler approach:

> **Describe what you want to automate in natural language → generate a workflow → execute it → observe what happened.**

The MVP focuses on demonstrating the core agentic workflow experience without requiring external services or API keys.

## 💡 How It Works

A user describes an automation such as:

> "Send an email when a new lead is created."

Agentflow_AI generates a visual workflow and executes it through five cooperating agents:

```text
User Prompt
    ↓
Planner Agent
    ↓
Execution Agent
    ↓
Validation Agent
    ↓
Recovery Agent
    ↓
Monitoring Agent
    ↓
Execution Timeline
```

### Five-Agent Pipeline

| Agent                | Responsibility                                                  |
| -------------------- | --------------------------------------------------------------- |
| **Planner Agent**    | Plans the workflow and determines the required nodes.           |
| **Execution Agent**  | Executes the generated workflow nodes sequentially.             |
| **Validation Agent** | Checks whether the required workflow output is valid.           |
| **Recovery Agent**   | Determines whether recovery action is required after execution. |
| **Monitoring Agent** | Records the execution result and monitoring event.              |

## 🖥️ MVP Features

* User registration and login
* JWT-based authentication
* Dashboard for workflows and executions
* Natural-language workflow generation
* Visual workflow canvas
* Workflow saving
* Workflow execution
* Five-agent execution simulation
* Execution status tracking
* Five-stage execution timeline
* Integration status interface
* Deterministic local-first execution
* No external API keys required for the core demo

## 🧪 Demo Workflow

The primary MVP demonstration uses:

```text
Send an email when a new lead is created
```

The current deterministic MVP generates a reliable three-node workflow:

```text
New lead created
       ↓
Send email
       ↓
Record execution
```

The workflow is then executed through the five-agent pipeline.

A successful execution produces:

```text
planner
Planned 3 workflow nodes.

execution
Executed 3 nodes in sequence.

validation
Validated required workflow output fields.

recovery
No recovery action needed.

monitoring
Recorded successful execution event.
```

Execution status:

```text
COMPLETED
```

## 🛠️ Technology Stack

### Frontend

* Next.js Pages Router
* React
* Tailwind CSS
* Zustand
* Axios
* React Flow / `@xyflow/react`
* lucide-react

### Backend

* Node.js
* Express
* JWT
* bcryptjs
* Helmet
* CORS
* express-validator

### Storage

* In-memory storage for the MVP
* MongoDB reserved as a future production extension

## 📁 Project Structure

```text
Agentflow_AI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── styles/
│   ├── package.json
│   └── tailwind.config.js
│
├── server/
│   ├── src/
│   │   ├── agents/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── services/
│   └── package.json
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── spec.md
```

## ⚙️ Run Locally

### Prerequisites

* Node.js 18+
* npm

### 1. Clone the repository

```bash
git clone https://github.com/pallavitalawar25-cmd/Agentflow_AI.git
cd Agentflow_AI
```

### 2. Configure environment variables

Create environment files from the provided example:

```text
.env.example
```

Set a strong `JWT_SECRET`.

Do not commit `.env` or any secret credentials.

### 3. Install dependencies

From the project root:

```bash
npm install
npm install --prefix server
npm install --prefix client
```

### 4. Start the application

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

Backend health check:

```text
http://localhost:5000/api/health
```

## 🧭 Demo Flow

To test the application:

```text
Register
   ↓
Login
   ↓
Dashboard
   ↓
Create Workflow
   ↓
Enter automation prompt
   ↓
Generate
   ↓
Save
   ↓
Execute
   ↓
Inspect execution timeline
```

Recommended demo prompt:

```text
Send an email when a new lead is created
```

## 🚀 Deployment

The current MVP is deployed using Render.

### Backend

Backend configuration:

```text
Platform: Render Web Service
Runtime: Node
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Required environment variables:

```text
PORT
JWT_SECRET
CLIENT_URL
MONGODB_URI
OPENROUTER_API_KEY
GEMINI_API_KEY
```

The MVP can operate without MongoDB, OpenRouter, or Gemini credentials because deterministic workflow generation and execution are used for the demonstration.

### Frontend

Frontend configuration:

```text
Platform: Render Web Service
Runtime: Node
Root Directory: client
Build Command: npm install && npm run build
Start Command: npm start
```

Frontend environment variable:

```text
NEXT_PUBLIC_API_URL=https://agentflow-ai-b96h.onrender.com/api
```

## 🔐 Security

The repository intentionally does not contain secret credentials.

The following files are excluded through `.gitignore`:

```text
.env
.env.local
node_modules/
.next/
```

Environment-specific secrets such as JWT secrets and API keys should be configured through the deployment platform rather than committed to source control.

## ⚠️ MVP Limitations

This project is intentionally scoped as a same-day MVP demonstration.

The following production capabilities are **not included** in the current version:

* Real Gmail OAuth
* Real Slack integration
* Real Discord integration
* Real Google Sheets integration
* Third-party API execution
* MongoDB persistence
* Redis
* BullMQ job queues
* Socket.IO real-time streaming
* Production-grade recovery workflows
* Full external AI provider integration

Instead, the MVP uses deterministic local execution so the complete five-agent workflow can be demonstrated reliably without external service dependencies.

## 🔮 Future Extensions

The architecture can be extended with:

* Persistent MongoDB workflow and execution storage
* OAuth-based third-party integrations
* Real Gmail, Slack, Discord, and Google Sheets actions
* Redis and BullMQ for background execution
* Socket.IO for real-time execution updates
* OpenRouter / Gemini-powered workflow planning
* More advanced conditional and branching workflows
* Production-grade retry and recovery strategies
* Detailed execution analytics

## 📊 Current MVP Architecture

```text
                    ┌──────────────────┐
                    │   User Prompt    │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Workflow Builder │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Planner Agent    │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Execution Agent  │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Validation Agent │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Recovery Agent   │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Monitoring Agent │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │ Execution        │
                    │ Timeline         │
                    └──────────────────┘
```

## 📌 Project Status

**Status: MVP Complete and Deployed**

The current deployment demonstrates:

* Authentication
* Workflow generation
* Visual workflow representation
* Workflow execution
* Five-agent orchestration
* Execution validation
* Recovery decision
* Monitoring event
* Execution timeline

## 👩‍💻 Repository

GitHub:

https://github.com/pallavitalawar25-cmd/Agentflow_AI

---

**Agentflow_AI — Describe it. Watch it run.**
