import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js'; // Ensure this is imported
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import adminProjectRoutes from './routes/admin.projects.js';
import adminTeamRoutes from './routes/admin.team.js';
import adminContentRoutes from './routes/admin.content.js';
import adminUserRoutes from './routes/admin.users.js';
import adminSettingsRoutes from './routes/admin.settings.js';
import adminAuditRoutes from './routes/admin.audit.js';
import publicProjectRoutes from './routes/public.projects.js';
import publicTeamRoutes from './routes/public.team.js';
import publicContentRoutes from './routes/public.content.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// --- 1. DATABASE GUARD MIDDLEWARE ---
// This prevents the 500 error caused by Mongoose buffering timeouts
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB Guard Error:", err.message);
    res.status(503).json({ error: "Database connection failed" });
  }
});

app.use(helmet());

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://nydevadmin.vercel.app",
  "https://nydevelopment.vercel.app",
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// ROOT ROUTE
app.get('/', (req, res) => {
  res.type('html').send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NYDev Backend</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #0b0f14;
        --card: #121826;
        --accent: #6ee7b7;
        --muted: #9aa4b2;
        --text: #e6edf3;
        --border: rgba(148, 163, 184, 0.2);
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: radial-gradient(1000px 500px at 80% -10%, rgba(110, 231, 183, 0.2), transparent),
                    radial-gradient(900px 500px at 10% 110%, rgba(56, 189, 248, 0.2), transparent),
                    var(--bg);
        color: var(--text);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }
      .card {
        width: min(820px, 100%);
        background: linear-gradient(180deg, rgba(18, 24, 38, 0.95), rgba(18, 24, 38, 0.9));
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 28px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(110, 231, 183, 0.12);
        color: var(--accent);
        font-weight: 600;
        letter-spacing: 0.3px;
        font-size: 12px;
        text-transform: uppercase;
      }
      h1 {
        margin: 16px 0 8px;
        font-size: 32px;
      }
      p {
        margin: 0 0 16px;
        color: var(--muted);
        line-height: 1.6;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 14px;
        margin-top: 18px;
      }
      .chip {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 12px 14px;
        background: rgba(15, 23, 42, 0.6);
        font-size: 13px;
        color: var(--text);
      }
      .chip span {
        display: block;
        color: var(--muted);
        font-size: 12px;
        margin-top: 4px;
      }
      .links {
        margin-top: 16px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      a {
        color: #0b0f14;
        background: var(--accent);
        text-decoration: none;
        padding: 10px 14px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 13px;
      }
      a.secondary {
        background: transparent;
        color: var(--text);
        border: 1px solid var(--border);
      }
      code {
        font-family: "Cascadia Code", Consolas, monospace;
        font-size: 12px;
        background: rgba(148, 163, 184, 0.15);
        padding: 2px 6px;
        border-radius: 6px;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="badge">NYDev API</div>
      <h1>Backend is Online</h1>
      <p>Welcome to the NY Development backend. Use the endpoints below to explore public data or manage the admin CMS.</p>
      <div class="grid">
        <div class="chip">Public API<span><code>/api/public/projects</code></span></div>
        <div class="chip">Team API<span><code>/api/public/team</code></span></div>
        <div class="chip">Content API<span><code>/api/public/content</code></span></div>
        <div class="chip">Auth API<span><code>/api/auth</code></span></div>
      </div>
      <div class="links">
        <a href="/api/public/projects">View Projects</a>
        <a class="secondary" href="/api/public/team">View Team</a>
      </div>
    </main>
  </body>
</html>`);
});

// API ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin/projects', adminProjectRoutes);
app.use('/api/admin/team', adminTeamRoutes);
app.use('/api/admin/content', adminContentRoutes);
app.use('/api/admin/users', adminUserRoutes);
app.use('/api/admin/settings', adminSettingsRoutes);
app.use('/api/admin/audit-logs', adminAuditRoutes);
app.use('/api/public/projects', publicProjectRoutes);
app.use('/api/public/team', publicTeamRoutes);
app.use('/api/public/content', publicContentRoutes);

app.use(errorHandler);

export default app;