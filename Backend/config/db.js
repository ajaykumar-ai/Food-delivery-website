import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://ajay:0987654321@cluster0.k5skg0y.mongodb.net/food-del'
  )
  .then(() => console.log("Db Connected"))
  .catch((err) => console.error("DB Connection Failed:", err));
};
