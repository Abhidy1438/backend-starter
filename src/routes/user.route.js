import express from "express";
import { indexRouter } from "./index.route";

const userRouter = express.Router();

userRouter.get("/create", create);

userRouter.get("/all", getAll);

userRouter.get("/:id", getOne);

userRouter.put("/:id", updateOne);

userRouter.delete("/:id", deleteOne);

export { userRouter };
