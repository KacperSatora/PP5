import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productList: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }
  ngOnDestroy(): void {
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(
      () => {
        this.productList = this.productList.filter(c => c.id !== product.id);
      },
    )
  }

  redirectToForm() {
    this.router.navigate(['invoice/product-form']);
  }
}
