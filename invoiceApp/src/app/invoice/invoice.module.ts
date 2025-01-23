import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponentComponent } from './components/customer-list-element-component/customer-list-element-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product-service.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListElementComponent } from './components/product-list-element/product-list-element.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { SupplierListElementComponent } from './components/supplier-list-element/supplier-list-element.component';
import { SupplierService } from './services/supplier.service';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponentComponent,
    CustomerListElementComponentComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductListElementComponent,
    SupplierFormComponent,
    SupplierListComponent,
    SupplierListElementComponent,
  ],
  imports: [CommonModule, InvoiceRoutingModule, FormsModule, HttpClientModule],
  exports: [CustomerFormComponent, CustomerListComponentComponent, ProductFormComponent, ProductListComponent, SupplierFormComponent, SupplierListComponent],
  providers: [CustomerService, ProductService, SupplierService],
})
export class InvoiceModule { }
