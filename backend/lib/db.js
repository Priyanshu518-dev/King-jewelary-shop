import mongoose from "mongoose";
import dns from "dns";

export const connectDB = async () => {
    try {
        // Set DNS servers to Google DNS to fix querySrv ECONNREFUSED error
        dns.setServers(["8.8.8.8", "8.8.4.4"]);
        
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MONGODB", error.message);
        process.exit(1);
    }
};