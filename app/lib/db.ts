
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

console.log("MONGO URI =", process.env.MONGODB_URI);


let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false, // MUHIIM
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB connected");
  return cached.conn;
};

export default connectToDatabase;
