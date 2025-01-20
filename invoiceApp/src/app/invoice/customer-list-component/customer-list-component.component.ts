import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { CustomerListElementComponentComponent } from '../components/customer-list-element-component/customer-list-element-component.component';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  templateUrl: './customer-list-component.component.html',
  styleUrl: './customer-list-component.component.scss',
})
export class CustomerListComponentComponent implements OnInit, OnDestroy {
  customerList: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customerList = data;
    });
  }
  ngOnDestroy(): void {
    console.log('Zamykam komponent');
  }

  deleteCustomer(customer: Customer) {
    console.log('Rodzic otrzymał');
    this.customerService.deleteCustomer(customer);
  }

  redirectToForm() {
    this.router.navigate(['invoice/customer-form']);
  }
}
