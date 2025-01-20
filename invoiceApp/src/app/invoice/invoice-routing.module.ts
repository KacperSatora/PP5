import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';

const routes: Routes = [
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'customer-list', component: CustomerListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
