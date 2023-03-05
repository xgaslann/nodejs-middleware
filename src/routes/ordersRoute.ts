import express from "express";
import {
    createOrder,
    deleteOrder,
    getOrderById,
    getOrders,
    updateOrder,
} from "../controllers/ordersController";

const ordersRoute = express.Router();


ordersRoute.get("/", getOrders);
ordersRoute.get("/:id", getOrderById);
ordersRoute.post("/", createOrder);
ordersRoute.put("/:id", updateOrder);
ordersRoute.delete("/:id", deleteOrder);

export default ordersRoute;
