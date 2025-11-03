import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string).then(() => {
            console.log("MongoDB connected");
        })
    } catch (error: any) {
        mongoose.disconnect();
        throw new Error("Mongodb connection failed: " + error.message);
    }
}
export default connectDB;