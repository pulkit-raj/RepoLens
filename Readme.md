
# RepoLens

AI-powered Codebase Intelligence Platform.

RepoLens is a tool designed to analyze GitHub repositories, understand their codebase structure, and generate useful insights using AI.

## Tech Stack

### Backend
- Python
- FastAPI
- Uvicorn

### Frontend
- React
- TypeScript
- Vite

### Planned Technologies
- PostgreSQL
- GitHub API
- AI / LLM Integration

## Current Features

- FastAPI backend setup
- React frontend setup
- Frontend-backend connectivity
- Backend health check endpoint

## Project Structure

```text
RepoLens/
├── backend/
│   ├── venv/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

## Running Locally

### Backend

```bash
cd backend
python -m venv venv
```

Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Backend: http://127.0.0.1:8000

API Documentation: http://127.0.0.1:8000/docs

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Project Status

Currently under development.
