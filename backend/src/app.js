import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
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

app.use(helmet());
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://nydevadmin.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or Postman)
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

app.get('/', (req, res) => res.send('NYDev Backend running'));

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
