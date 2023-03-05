export interface Order {
    id: string;
    userId: string | number; // userId, string veya number tiplerinden biri olabilir
    productId: string;
    quantity: number;
}
