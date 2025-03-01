import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  a =  {
    carts: [
      {
        image: '',
        title: 'Product 1',
        price: 100,
        quantity: 1
      },
      {
        image: '',
        title: 'Product 2',
        price: 200,
        quantity: 1
      },
      {
        image: '',
        title: 'Product 3',
        price: 300,
        quantity: 1
      }
    ]
  }

  constructor() {
    if(!this.cartExist()) {
      localStorage.setItem('cart', JSON.stringify(this.a.carts));
    }
  }

  cartExist(): boolean {
    return localStorage.getItem('cart') !== null;
  }

  getLengthCard(): number {
    return this.getCart().length;
  }

  getCart(): any {
    let cart: string | null = localStorage.getItem('cart');

    return cart ? JSON.parse(cart) : null;
  }

  addCart(cart: Cart): void {
    let cartStorage = this.getCart();

    if(!this.cartExist()) {
      cartStorage.card = [cart];
    } else {
      cartStorage.cards.push(cart);
    }

    localStorage.setItem('cart', JSON.stringify(cartStorage));
  }
}
