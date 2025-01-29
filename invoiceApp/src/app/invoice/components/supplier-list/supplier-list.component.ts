import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { Router } from '@angular/router';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  standalone: false,
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent {
  supplierList: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe((data: Supplier[]) => {
      console.log(data);
      
      this.supplierList = data;
    });
  }
  ngOnDestroy(): void {
  }

  deleteSupplier(customer: Supplier) {
    this.supplierService.deleteSupplier(customer).subscribe(
      () => {
        this.supplierList = this.supplierList.filter(c => c.id !== customer.id);
      },
    )
  }

  redirectToForm() {
    this.router.navigate(['invoice/supplier-form']);
  }
}
