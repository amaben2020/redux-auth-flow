import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_CONNECTION_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local",
  );
}

//@ts-ignore
let cached = global.mongoose;

if (!cached) {
  //@ts-ignore
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL!!, opts).then((mongoose) => {
      console.log(mongoose);
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
