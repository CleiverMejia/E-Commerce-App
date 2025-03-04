import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { Cart } from 'src/app/models/Cart';
import Payment from 'src/app/models/Payment';
import { PaymentService } from 'src/app/services/payment.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
  standalone: false
})
export class ShoppingPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  
  total: number = 0;
  carts: Cart[] = [];
  data: Payment = {
    name: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    bankNumber: 0,
    cvc: '',
    expiration: '',
    total: 0
  };

  public alertButtons = (id: number) => [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Aceptar',
      role: 'confirm',
      handler: () => {
        this.shoppingCart.deleteCard(id)
        this.setCarts()
      },
    }
  ];

  constructor(
    private shoppingCart: ShoppingCartService,
    private payment: PaymentService,
    private route: Router
  ) { }

  ngOnInit() {
    this.setCarts();
    this.calculateTotal();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    this.data.total = this.total;

    this.payment.setData(this.data);
    this.route.navigate(['/loading']);
  }

  setCarts(): void {
    if (this.shoppingCart.cartExist()) {
      this.carts = this.shoppingCart.getCarts();
    }
  }

  calculateTotal(asd: any = ""): void {
    console.log(asd);
    
    this.setCarts();
    this.carts.forEach((e: Cart) => {
      this.total += e.quantity * e.price
    });
  }
}
