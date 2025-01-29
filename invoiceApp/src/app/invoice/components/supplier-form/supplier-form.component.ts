import { Component } from '@angular/core';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';
import { Supplier } from '../../models/supplier';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  standalone: false,
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.scss'
})
export class SupplierFormComponent {
  constructor(
    private supplierService: SupplierService,
    private router: Router,
  ) { }

  supplier: Supplier = new Supplier();
  saveData(form: NgForm) {
    if (form.valid) {
      this.supplierService.addSupplier(this.supplier).subscribe(
        (result: Supplier) => {
          console.log(result);
          this.router.navigate(['/invoice/supplier-list']);
        },
        (error: any) => {
          console.log(error);
        },
      );
    } else {
      console.log('wrong form');
    }
  }
  toList() {
    this.router.navigate(['/invoice/supplier-list'])
  }

}
