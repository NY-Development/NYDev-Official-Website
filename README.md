# NYDev Website Monorepo

## Structure
- Admin/ (React + Vite + TypeScript)
- frontend/ (React + Vite + TypeScript)
- backend/ (Express + MongoDB)

## Local Setup
1. Install dependencies
   - cd backend && npm install
   - cd ../frontend && npm install
   - cd ../Admin && npm install

2. Environment variables
Create .env files:

backend/.env
MONGO_URI=mongodb://localhost:27017/nydev
JWT_SECRET=change_me
NODE_ENV=development

frontend/.env
VITE_API_URL=http://localhost:5000

Admin/.env
VITE_API_URL=http://localhost:5000

3. Run services
- backend: npm run dev
- frontend: npm run dev
- admin: npm run dev

## API Endpoints
Admin (secured):
- /api/admin/projects
- /api/admin/team
- /api/admin/content
- /api/admin/users
- /api/admin/audit-logs
- /api/admin/settings

Public:
- /api/public/projects
- /api/public/team
- /api/public/content

## Docker
Build and run:
- docker-compose up --build

Ports:
- frontend: http://localhost:3000
- admin: http://localhost:3001
- backend: http://localhost:5000

## Deployment
- admin.domain.com -> Admin
- app.domain.com -> frontend
- api.domain.com -> backend
