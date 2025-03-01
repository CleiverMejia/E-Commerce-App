import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  sort: string = '';
  category: string = '';

  constructor(private http: ProductsService) { }

  ngOnInit() {
    this.setAllProducts();
    this.setCategories();
  }

  setSort(sort: string): void {
    this.sort = sort;
    this.setProductsFiltered();
  }

  setCategory(category: string): void {
    this.category = category;
    this.setProductsFiltered();
  }

  setProductsFiltered(): void {
    this.http.getProductsFiltered(this.sort, this.category).subscribe({
      next: (products: any) => {
        this.products = products;
        console.log(this.products);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  setAllProducts(): void {
    this.http.getProducts().subscribe({
      next: (products: any) => {
        this.products = products;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  setCategories(): void {
    this.http.getCategories().subscribe({
      next: (categories: any) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
