import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Supplier } from '../../models/supplier';

@Component({
  selector: 'app-supplier-list-element',
  standalone: false,
  templateUrl: './supplier-list-element.component.html',
  styleUrl: './supplier-list-element.component.scss'
})
export class SupplierListElementComponent {
  @Input()
  supplier: Supplier = new Supplier();
  @Output()
  deletedSupplierEvent = new EventEmitter<Supplier>();

  onDeletedSupplier(supplier: Supplier) {
    this.deletedSupplierEvent.emit(supplier);
  }

  deleteSupplier() {
    this.deletedSupplierEvent.emit(this.supplier);
  }
}
