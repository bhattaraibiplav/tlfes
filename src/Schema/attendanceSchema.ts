import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["present", "absent", "late", "excused"],
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Attendance", attendanceSchema);