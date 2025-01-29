import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

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
    console.log('Usuwanie klienta', customer);
    this.customerService.deleteCustomer(customer).subscribe(
      () => {
        this.customerList = this.customerList.filter(c => c.nip !== customer.nip);
        console.log('Klient usunięty');
      },
      (error) => {
        console.error('Błąd przy usuwaniu klienta', error);
      }
    )
  }

  redirectToForm() {
    this.router.navigate(['invoice/customer-form']);
  }
}
