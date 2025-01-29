import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-element-component',
  standalone: false,
  templateUrl: './product-list-element.component.html',
  styleUrl: './product-list-element.component.scss',
})
export class ProductListElementComponent {
  @Input()
  product: Product = new Product();
  @Output()
  deletedProductEvent = new EventEmitter<Product>();

  onDeletedProduct(Product: Product) {
    this.deletedProductEvent.emit(Product);
  }

  deleteProduct() {
    this.deletedProductEvent.emit(this.product);
  }
}
