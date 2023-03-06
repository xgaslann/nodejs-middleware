import { Request, Response } from "express";
import { IOrder } from "../interfaces/IOrder";
import { orders } from "../data/orders";

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management
 */
export const getOrders = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Order']*/
    res.json(orders);
};

export const getOrderById = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Order']*/
    const { id } = req.params;
    const order = orders.find((o) => o.id === id);
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: "Order not found" });
    }
};

export const createOrder = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Order']*/
    const { userId, productId, quantity } = req.body;
    const newOrder: IOrder = {
        id: String(orders.length + 1),
        userId,
        productId,
        quantity,
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
};

export const updateOrder = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Order']*/
    const { id } = req.params;
    const { userId, productId, quantity } = req.body;
    const orderIndex = orders.findIndex((o) => o.id === id);
    if (orderIndex !== -1) {
        orders[orderIndex] = {
            id,
            userId,
            productId,
            quantity,
        };
        res.json(orders[orderIndex]);
    } else {
        res.status(404).json({ message: "Order not found" });
    }
};

export const deleteOrder = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Order']*/
    const { id } = req.params;
    const orderIndex = orders.findIndex((o) => o.id === id);
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: "Order not found" });
    }
};
