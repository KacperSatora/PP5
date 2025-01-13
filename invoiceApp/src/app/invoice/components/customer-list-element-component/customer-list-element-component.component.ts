import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-element-component',
  standalone: false,
  templateUrl: './customer-list-element-component.component.html',
  styleUrl: './customer-list-element-component.component.scss'
})
export class CustomerListElementComponentComponent {
  @Input()
  customer: Customer = new Customer();
  @Output()
  deletedCustomerEvent = new EventEmitter<Customer>();

  onDeletedCustomer(customer: Customer) {
    this.deletedCustomerEvent.emit(customer)
    console.log(customer.nip);
    
  }

  deleteCustomer() {
    console.log('kasuje klienta', this.customer.nip);
    this.deletedCustomerEvent.emit(this.customer)
    
  }



}
