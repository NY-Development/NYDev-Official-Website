# NYDev Backend

This folder contains a minimal MERN-style backend using Node/Express and MongoDB with JWT authentication.

Quick start:

1. Copy `.env.example` to `.env` and set values.
2. Install dependencies:

```bash
cd backend
npm install
```

3. Run in development:

```bash
npm run dev
```

API endpoints (summary):

- `POST /api/auth/register` — register user
- `POST /api/auth/login` — login and receive access + refresh tokens
- `POST /api/auth/refresh` — exchange refresh token for a new access token
- `POST /api/auth/logout` — revoke refresh token
- `GET /api/users/me` — protected route returning current user

Environment variables required (see `.env.example`).
