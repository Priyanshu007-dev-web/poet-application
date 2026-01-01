import mongoose from "mongoose";
import { MONGODB_URL } from "../utils/contants.js";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGODB_URL);
    // console.log(`mongodbConnected at !! host ${connectionInstance.connection.host}`)
    console.log(`⚙️  MongoDB is connected at Successfully `);

  } catch (error) {
    console.log(` Mongo db Connection error !!`);
  }
};
export default connectDB;