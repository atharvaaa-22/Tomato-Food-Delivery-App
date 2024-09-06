import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://atharva:atharva@mern-estate.mp9iloi.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}