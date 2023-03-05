import express from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from "../controllers/usersController";


const usersRoute = express.Router();


usersRoute.get("/", getUsers);
usersRoute.get("/:id", getUserById);
usersRoute.post("/", createUser);
usersRoute.put("/:id", updateUser);
usersRoute.delete("/:id", deleteUser);

export default usersRoute;
