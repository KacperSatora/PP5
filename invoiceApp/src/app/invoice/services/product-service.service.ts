import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private productList: Product[] = [];
  private baseUrl: string = environment.apiUrl + `/products`;

  addProduct(product: Product): Observable<Product> {
    this.productList.push(product);

    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  getProduct(): Product[] {
    return this.productList;
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.baseUrl)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) =>
            new Product().deserialize(product),
          ),
        ),
      );
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}/${product.id}`);
  }
}
