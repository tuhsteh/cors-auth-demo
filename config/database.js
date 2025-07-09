const mongoose = require("mongoose");

const { MONGO_URI, 
    MONGODB_USERNAME,
    MONGODB_PASSWORD } = process.env;

console.log(`config/database:  MONGO_URI:  [${MONGO_URI}]`);

exports.connect = () => {
  // Connect to MongoDB
  mongoose
    .connect(MONGO_URI, {
      user: MONGODB_USERNAME,
      pass: MONGODB_PASSWORD
    })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.log(`MongoDB connection error:  [${err}]`);
      console.error(err);
      process.exit(1);
    });
};
