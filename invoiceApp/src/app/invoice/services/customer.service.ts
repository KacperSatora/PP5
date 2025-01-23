import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  private customerList: Customer[] = [];
  private baseUrl: string = environment.apiUrl + `/customers`;

  addCustomer(customer: Customer): Observable<Customer> {
    this.customerList.push(customer);

    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  getCustomer(): Customer[] {
    return this.customerList;
  }

  // getCustomers(): Observable<Customer[]> {
  //   return this.httpClient.get<Customer[]> (
  //     this.baseUrl
  //   )
  // }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>(this.baseUrl)
      .pipe(
        map((customers: Customer[]) =>
          customers.map((customer: Customer) =>
            new Customer().deserialize(customer),
          ),
        ),
      );
  }

  deleteCustomer(customer: Customer): void {
    // temporary
    this.customerList.splice(this.customerList.indexOf(customer), 1);

    // this.customerList = this.customerList.filter(cs => cs.nip !== customer.nip)
    // console.log(this.customerList);
  }
}
