const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Madycodes:Mm36780345%21%40@cluster0.gxfutgv.mongodb.net/MERN_Elex';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

