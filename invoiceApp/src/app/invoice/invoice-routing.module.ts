import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './components/customer-list/customer-list-component.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';

const routes: Routes = [
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-list', component: CustomerListComponentComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'invoice-form/:supplierId', component: InvoiceFormComponent }, 
  { path: 'supplier-form', component: SupplierFormComponent },
  { path: 'supplier-list', component: SupplierListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule { }
