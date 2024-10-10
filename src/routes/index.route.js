import express from "express";
import { userRouter } from "./user.route";
import { authRouter } from "./auth.route";

const indexRouter = express.Router();

indexRouter.use("/api/v1/users", userRouter);

indexRouter.user("/api/v1/auth", authRouter);

export { indexRouter };
