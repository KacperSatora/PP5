import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import { CommonModule } from '@angular/common';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  customer: Customer = new Customer();
  saveData(form: NgForm) {
    console.log(this.customer);
    console.log(form);
    console.log(form.valid);
    if (form.valid) {
      this.customerService.addCustomer(this.customer);
      this.router.navigate(['/invoice/customer-list']);
    } else {
      console.log("wrong form");

    }
  }

}
