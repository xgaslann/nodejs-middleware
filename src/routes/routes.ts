import express from "express";

import usersRouter from "./usersRouter";
import productsRouter from "./productsRouter";
import ordersRouter from "./ordersRouter";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/orders", ordersRouter);

export default router;
