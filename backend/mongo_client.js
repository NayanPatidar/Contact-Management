const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let connectionString = process.env.MONGODB_URL;
mongoose.connect(connectionString).then(() => console.log("Connected"));
