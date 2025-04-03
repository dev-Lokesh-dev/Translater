import mongoose from "mongoose";
import { config } from "dotenv";

config()
const connectionString = process.env.connectionString
const dbConnection = async () => {
    await mongoose.connect(connectionString)
    console.log('db connected');
}

export { dbConnection }