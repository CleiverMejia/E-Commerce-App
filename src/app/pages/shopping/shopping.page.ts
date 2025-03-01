import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
  standalone: false
})
export class ShoppingPage implements OnInit {
  lengthCart: number = 0;
  carts: Cart[] = [];

  constructor(private shoppingCard: ShoppingCartService) { }

  ngOnInit() {
    if (this.shoppingCard.cartExist()) {
      console.log(this.shoppingCard.getCart());

      this.carts = this.shoppingCard.getCart();
      this.lengthCart = this.shoppingCard.getLengthCard();
    }
  }

}
