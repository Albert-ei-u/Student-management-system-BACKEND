const mongoose = require("mongoose");

const connectDB= async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected successfully");
    }
    catch (error){
        console.error("connection failed", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;