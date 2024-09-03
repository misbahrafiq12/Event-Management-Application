import mongoose from "mongoose";

const connection = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        const url = await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected successfully:", url.connection.host);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

export default connection;
