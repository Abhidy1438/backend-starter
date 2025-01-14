import mongoose from "mongoose";

export let connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to DB!");
  } catch (error) {
    console.log("error");
    process.exit(1);
  }
};
