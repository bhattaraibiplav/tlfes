import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"],
    },
    DOB: {
        type: Date,
        required: true,
        validate: {
            validator: function (v:Date) {
                const age = new Date().getFullYear() - v.getFullYear();
                return age >= 3;
            },
            message: "Student must be at least 3 years old."
        }
    },
    address: {
        area: { type: String },
        postalCode: { type: String },
        city: { type: String },
    },
    grade: {
        type: String,
        required: true,
        enum: ["PlayGroup","Nursery", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    rollNumber: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: Date,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    scholarships: [
        {
            name: String,
            amount: Number,
            expiry: Date,
        }
    ],
    payments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Payment"
    }],
    courses: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Course"
    }],
    profileImage: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    guardian: [
        {
            guardianName: { type: String, required: true },
            guardianRelation: { type: String, required: true },
            guardianContact: { type: String, required: true, match: /^\+?[1-9]\d{1,14}$/ },
        }
    ],
    section: {
        type: String,
        enum: ["odd", "even", "rose", "lily", "sunflower", "none"],
        required: true
    },
    results: [{ type: mongoose.Schema.Types.ObjectId, ref: "Result" }],
    role: { default: "student", type: String },
    attendanceRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: "Attendance" }]


}, {
    timestamps: true
});
studentSchema.index({ grade: 1, rollNumber: 1, section: 1 }, { unique: true });
studentSchema.set("toJSON", {
  transform(doc, ret) {
    delete (ret as any).hashedPassword;
    return ret;
  }
});


const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
export default Student;