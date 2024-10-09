
import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

// POST route for user registration
userRouter.post("/register", registerUser);

// POST route for user login
userRouter.post("/login", loginUser);

export default userRouter;