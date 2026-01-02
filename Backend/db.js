const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI||"mongodb://127.0.0.1:27017/IMS";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
