import express from "express";
import userRoute from "./routes/users.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoute);

app.listen(PORT, () => console.log("Server running at port", PORT));
