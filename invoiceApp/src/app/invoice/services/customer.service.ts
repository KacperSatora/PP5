import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = environment.apiUrl + `/customers`;

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

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

  deleteCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${customer.id}`);
  }
}
