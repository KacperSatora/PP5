import { Customer } from './customer';
import { Invoice } from './invoice';

export class Supplier extends Customer {
  account_number: number;

  constructor(account_number: number) {
    super();
    this.account_number = account_number;
  }
  invocices: Invoice[] = [];


}
