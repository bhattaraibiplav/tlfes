import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    credits: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        required: true
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    }]
});

export default mongoose.model("Subject", subjectSchema);
