import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerListComponentComponent } from './customer-list-component/customer-list-component.component';
import { FormsModule } from "@angular/forms"
import { CustomerListElementComponentComponent } from './components/customer-list-element-component/customer-list-element-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';



@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponentComponent, CustomerListElementComponentComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [CustomerFormComponent, CustomerListComponentComponent],
  providers: [
    CustomerService
  ]
})
export class InvoiceModule { }
