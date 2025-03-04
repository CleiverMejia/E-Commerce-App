import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/Product';
import { ToastController } from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
  standalone: false
})
export class CardDetailPage implements OnInit {
  id: number = 0;
  product!: Product;

  constructor(
    private actRoute: ActivatedRoute,
    private http: ProductsService,
    private shopping: ShoppingCartService,
    private toastController: ToastController
  ) {
    this.id = Number(this.actRoute.snapshot.paramMap.get('id') as string) 
  }

  ngOnInit() {
    this.setProduct();
  }

  setProduct() {
    this.http.getProduct(this.id).subscribe({
      next: (product: any) => {
        this.product = product
      },
      error: (error: any) => {
        console.error(error)
      }
    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 1500,
      position: position,
    });

    await toast.present()

    setTimeout(() => {
      window.location.reload();
    }, 1501);
  }

  addShopping() {
    this.shopping.addCart(this.product)

    this.presentToast('top')
  }
}
