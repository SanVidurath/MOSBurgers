import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
    providedIn:'root',
})
export class CartService {
    private cart:Product[] = [];

    addToCart(product:Product):boolean{
        const exists = this.cart.some(p=>p.itemCode===product.itemCode);
        if(!exists){
            this.cart.push(product);
            return true;
        }
        return false
    }

    getCart():Product[]{
        return this.cart;
    }
}