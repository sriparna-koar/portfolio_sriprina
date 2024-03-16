// utils/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://koarsk03:SbCbh4tgnHIczzZF@personalportfoliocontac.vbjxk64.mongodb.net/';

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI, {
    
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

export default dbConnect;
