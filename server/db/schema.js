import mongoose from "mongoose";

// MongoDB Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    aadhar: Number,
    password: String,
    address:String,
    district:String,
    state:String,
    pin:Number
});

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    password: String,
    // EmergencyCases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Emergency" }],
});

const pendingSchema = new mongoose.Schema({
    map: String,
    date: String,
    userId: String
});

const solvedSchema = new mongoose.Schema({
    map: String,
    date: String,
    userId: String
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    description: String,
    userId: Number
});

// MongoDB Models
export const User = mongoose.model("User", userSchema);
export const Admin = mongoose.model("Admin", adminSchema);
export const Pending = mongoose.model("Pending", pendingSchema);
export const Solved = mongoose.model("Solved", solvedSchema);
export const Contact = mongoose.model("Contact", contactSchema);
