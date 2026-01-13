const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        regNumber: {
            type: String,
            required:true,
            unique:true,
        },
        email: {
            type:String,
            required:true,
            unique:true,
        },
        course: {
            type:String,
            required:true,
        },
        year: {
            type: Number,
            required: true,
        },
    },
    {timestamps:true}
);

module.exports = mongoose.model("students", StudentSchema);