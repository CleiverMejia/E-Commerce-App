import { Injectable } from '@angular/core';
import Payment from '../models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  data!: Payment;

  constructor() { }

  setData(data: Payment) {
    this.data = data;
  }

  getData(): Payment | null {
    return this.data ?? null;
  }
}
