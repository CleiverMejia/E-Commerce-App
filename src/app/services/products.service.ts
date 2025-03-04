import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Product from '../models/Product';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API = environment.api_url;
  private readonly CATEGORY = environment.category;
  private readonly CATEGORIES = environment.categories;
  private readonly SORT = environment.sort;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product>(this.API).pipe(
      map((res: Product) => {
        return res;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.API + '/' + id).pipe(
      map((res: Product) => {
        return res;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  getProductsFiltered(sort: string, category: string) {
    let categoryParam = category ? this.CATEGORY + category : '';

    return this.http.get<Product>(`${this.API + categoryParam + this.SORT}=${sort}`).pipe(
      map((res: Product) => {
        return res;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }

  getCategories() {
    return this.http.get(this.API + this.CATEGORIES).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }
}
