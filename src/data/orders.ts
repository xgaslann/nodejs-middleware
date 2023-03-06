import { IOrder } from "../interfaces/IOrder";

export const orders: IOrder[] = [
    {
        id: "1",
        userId: "1",
        productId: "1",
        quantity: 2,
    },
    {
        id: "2",
        userId: "1",
        productId: "2",
        quantity: 1,
    },
    {
        id: "3",
        userId: "2",
        productId: "3",
        quantity: 3,
    },
    {
        id: "4",
        userId: "3",
        productId: "1",
        quantity: 1,
    },
];

const userExampleString = JSON.stringify(orders[0]);
