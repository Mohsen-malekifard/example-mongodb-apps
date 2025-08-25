// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;
  const db = await mongoose.connect(MONGODB_URI);
  isConnected = db.connections[0].readyState === 1;
}