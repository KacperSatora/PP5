import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss',
})
export class CustomerFormComponent {
  constructor(
    private customerService: CustomerService,
    private router: Router,
  ) { }

  customer: Customer = new Customer();
  saveData(form: NgForm) {
    if (form.valid) {
      this.customerService.addCustomer(this.customer).subscribe(
        () => {
          alert('działa');
          this.router.navigate(['/invoice/customer-list']);
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
