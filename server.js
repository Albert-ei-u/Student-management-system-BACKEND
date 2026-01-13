require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});