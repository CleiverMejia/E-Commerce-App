import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {
  cardLength: number = 0;

  constructor(private shoppingCard: ShoppingCartService) { }

  ngOnInit() {
    this.cardLength = this.shoppingCard.getLengthCard();
  }

}
