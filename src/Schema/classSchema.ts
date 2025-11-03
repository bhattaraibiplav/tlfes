import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    section: {
        type: String,
        enum: ["odd", "even", "rose", "lily", "sunflower", "none"],
        required: true
    },
    classTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
    },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
}, {
    timestamps: true
});

export default mongoose.model("Class", classSchema);