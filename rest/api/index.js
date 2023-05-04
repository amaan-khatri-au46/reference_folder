import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser())
dotenv.config();

// using this middleware will not throw an error
mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected To Mongo Db");
  } catch (error) {
    throw error;
  }
};

app.use(express.json())

// middlewares 
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

// bascially this type of middle which is used to hit one after next middleware 
// and also it for error handling error ... 
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  //   this stack will tell in more detail where the error came from .... 
    stack: err.stack,
  });
});


app.listen(8000, () => {
    connect()
  console.log("Server Started ");
});