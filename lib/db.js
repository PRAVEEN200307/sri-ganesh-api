import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('mangoDB connected ....')
}

connectDB().catch(err => console.log(err));
