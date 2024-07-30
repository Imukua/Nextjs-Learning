"use server"
import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("Using existing connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL);
        isConnected = true;
        console.log("MongoDB connection made");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}