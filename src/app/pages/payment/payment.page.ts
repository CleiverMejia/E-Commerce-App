import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Payment from 'src/app/models/Payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: false
})
export class PaymentPage implements OnInit {
  data: Payment | null = null;

  constructor(
    private dataPayment: PaymentService,
    private route: Router
  ) { }

  ngOnInit() {
    this.setData()
  }

  setData() {
    this.data = this.dataPayment.getData();
  }

  goToHome() {
    this.route.navigate(['/home']);
    localStorage.clear()
    setTimeout(() => {window.location.reload()}, 1000)
  }
}
