export interface CartItem {
    itemName: string;
    itemType: string;
    unitPrice: number;
    quantityInStock: number;
    quantityAvailable: number;
    quantity: number;
    discount: number;
    finalPrice?: number;
}