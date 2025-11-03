import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    DOB: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    experience: {
        type: Number,
        required: true
    },
    profileImage: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    employmentDate: {
        type: Date,
        required: true
    },
    phoneNumber: { type: String, required: true, match: /^\+?[1-9]\d{1,14}$/ },
    payments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Payment"
    }],
    education: [
        {
            degree: { type: String, required: true },
            institution: { type: String, required: true },
            yearOfCompletion: { type: Number, required: true }
        }
    ],
    skills: [{ type: String }],
    hashedPassword: {
        type: String,
        required: true,
    },
    role: { default: "teacher", type: String },
    attendanceRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendance" }]

}, {
    timestamps: true
});
teacherSchema.set("toJSON", {
    transform(doc, ret) {
        delete (ret as any).hashedPassword;
        return ret;
    }
});

const Teacher = mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);
export default Teacher;