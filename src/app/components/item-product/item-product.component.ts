import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  standalone: false,
})
export class ItemProductComponent implements OnInit {
  @Input() productId: number = 0;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() quantity: number = 0;

  @Output() quantityEvent = new EventEmitter<number>();

  constructor(private shopping: ShoppingCartService) { }

  ngOnInit() {}

  aditionProduct(): void {
    this.quantity++;

    this.shopping.increaseCart(this.productId);
    this.quantityEvent.emit(this.quantity);
  }

  substractProduct(): void {
    if(this.quantity !== 1) {
      this.quantity--;

      this.shopping.decreaseCart(this.productId);
      this.quantityEvent.emit(this.quantity);
    }
  }
}
