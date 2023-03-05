import { Request, Response } from "express";
import { Product } from "../interfaces/Product";
import { products } from "../data/products";

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

export const getProducts = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Product']*/
    res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Product']*/
    const { id } = req.params;
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

export const createProduct = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Product']*/
    const { name, price } = req.body;
    const newProduct: Product = {
        id: String(products.length + 1),
        name,
        price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Product']*/
    const { id } = req.params;
    const { name, price } = req.body;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        products[productIndex] = {
            id,
            name,
            price,
        };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

export const deleteProduct = (req: Request, res: Response) => {
    /* 	#swagger.tags = ['Product']*/
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};
