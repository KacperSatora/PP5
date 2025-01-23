import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service.service';
import { Product } from '../../models/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  product: Product = new Product();
  saveData(form: NgForm) {
      console.log(this.product);
      console.log(form);
      console.log(form.valid);
      if (form.valid) {
        this.productService.addProduct(this.product).subscribe(
          () => {
            alert('działa');
            this.router.navigate(['/invoice/product-list']);
          },
          (error: any) => {
            console.log(error);
          },
        );
      } else {
        console.log('wrong form');
      }
    }
}


