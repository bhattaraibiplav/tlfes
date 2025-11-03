import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "createdByModel"
    },
    createdByModel: {
        type: String,
        required: true,
        enum: ["Teacher", "Admin"]  
    }

}, {
    timestamps: true
});

export default mongoose.model("Quiz", quizSchema);
