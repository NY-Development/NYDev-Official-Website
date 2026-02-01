import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/nydev');
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
};

start();
