import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
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
    contactNumber: { 
        type: String,
        required: true,
        match: /^\+?[1-9]\d{1,14}$/
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    role: { 
        default: "admin", 
        type: String 
    }

}, {
    timestamps: true    
})