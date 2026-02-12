import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) return;

  try {
    mongoose.set('strictQuery', true);
    // Disable buffering so we don't hang for 20s
    mongoose.set('bufferCommands', false); 

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    
    isConnected = !!conn.connections[0].readyState;
    console.log('MongoDB Connected ✅');
  } catch (err) {
    console.error('MongoDB Error ❌:', err.message);
    throw err;
  }
};