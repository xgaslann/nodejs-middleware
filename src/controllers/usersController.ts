import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import { users } from "../data/users";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

export const getUsers = async (req: Request, res: Response) => {
    /* 	#swagger.tags = ['User']*/
    res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    /* 	#swagger.tags = ['User']*/
    const { id } = req.params;
    const user = users.find((u) => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

export const createUser = async (req: Request, res: Response) => {
    /* 	#swagger.tags = ['User']*/
    const { firstName, lastName, email, password } = req.body;
    const newUser: IUser = {
        id: String(users.length + 1),
        firstName,
        lastName,
        email,
        password,
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
    /* 	#swagger.tags = ['User']*/
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const userIndex = users.findIndex((u) => u.id === id);""
    if (userIndex !== -1) {
        users[userIndex] = {
            id,
            firstName,
            lastName,
            email,
            password,
        };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    /* 	#swagger.tags = ['User']*/
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
