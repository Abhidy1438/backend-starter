import express from "express";
import { indexRouter } from "./index.route";

const authRouter = express.Router();

authRouter.get("/login", login);

authRouter.post("/register", register);

export { authRouter };
