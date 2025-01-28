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

  supplier: Supplier = new Supplier(Math.ceil(Math.random() * 10000));
  saveData(form: NgForm) {
    if (form.valid) {
      this.supplierService.addSupplier(this.supplier).subscribe(
        () => {
          alert('działa');
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

}
