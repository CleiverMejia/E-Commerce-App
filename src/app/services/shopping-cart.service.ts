import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor() {}

  cartExist(): boolean {
    return localStorage.getItem('cart') !== null;
  }

  getLengthCard(): number {
    return this.cartExist() ? this.getCarts().length : 0;
  }

  getCarts(): any {
    let cart: string | null = localStorage.getItem('cart');

    return cart ? JSON.parse(cart) : null;
  }

  addCart(product: Product): void {
    let cartStorage: Cart[] = this.getCarts();
    let cart: Cart =  {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1
    }

    if(!this.cartExist()) {
      cartStorage = [cart];
    } else {
      if (cartStorage.find((e: Cart) => e.id === cart.id)) {
        this.increaseCart(cart.id)
        return;
      } else {
        cartStorage.push(cart);
      }
    }

    localStorage.setItem('cart', JSON.stringify(cartStorage));
  }

  deleteCard(id: number): void {
    let cart = this.getCarts();

    if(this.cartExist()) {
      let newCart: Cart[] = cart.filter((e: Cart) => e.id !== id);
  
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  increaseCart(id: number): void {
    let cart = this.getCarts();

    if(this.cartExist()) {      
      let newCart: Cart[] = cart.map((e: Cart) => {
        if(e.id === id) e.quantity++;

        return e
      })

      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  decreaseCart(id: number): void {
    let cart = this.getCarts();

    if(this.cartExist()) {
      let newCart: Cart[] = cart.map((e: Cart) => {
        if(e.id === id) e.quantity--;

        return e
      })

      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }
}
