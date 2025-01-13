import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private customerList: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customerList.push(customer);
  }

  getCustomer(): Customer[] {
    return this.customerList;
  }

  deleteCustomer(customer: Customer): void {
    // temporary
    // this.customerList.splice(this.customerList.indexOf(customer), 1);
    

    this.customerList = this.customerList.filter(cs => cs.nip != customer.nip)
    console.log(this.customerList);
  }
}
