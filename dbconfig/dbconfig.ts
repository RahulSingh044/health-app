import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.error("Connection Failed");
    process.exit(0);
  }
}
