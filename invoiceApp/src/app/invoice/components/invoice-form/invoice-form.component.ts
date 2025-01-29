import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Invoice } from '../../models/invoice';


import { Product } from '../../models/product';
import { SupplierService } from '../../services/supplier.service';
import { ProductService } from '../../services/product-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-invoice-form',
  standalone: false,
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = new Invoice();
  products: Product[] = [];
  supplierId: string = '';

  constructor(
    private supplierService: SupplierService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.supplierId = this.activatedRoute.snapshot.paramMap.get('supplierId')!;
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Błąd podczas ładowania produktów', error);
      }
    );
  }

  onProductSelect(event: Event) {
    const productId = (event.target as HTMLSelectElement).value;
    const selectedProduct = this.products.find(product => product.id === productId);

    if (selectedProduct) {
      this.invoice.name = selectedProduct.name;
      this.invoice.value = Number(selectedProduct.price);
    }
  }

  onSubmitInvoice(form: NgForm) {
    if (form.valid) {
      this.supplierService.addInvoiceToSupplier(this.supplierId, this.invoice).subscribe(
        response => {
          console.log('Faktura zapisana', response);
          this.router.navigate(['/invoice/supplier-list']);
        },
        error => {
          console.error('Błąd przy zapisywaniu faktury', error);
        }
      );
    } else {
      console.error('Formularz nie jest prawidłowy!');
    }
  }
}
