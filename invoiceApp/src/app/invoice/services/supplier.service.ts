import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Supplier } from '../models/supplier';

@Injectable()
export class SupplierService {
  constructor(private httpClient: HttpClient) { }

  private suppliersList: Supplier[] = [];
  private baseUrl: string = environment.apiUrl + `/suppliers`;

  addSupplier(supplier: Supplier): Observable<Supplier> {
    this.suppliersList.push(supplier);

    return this.httpClient.post<Supplier>(this.baseUrl, supplier);
  }

  getSupplier(): Supplier[] {
    return this.suppliersList;
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.httpClient
      .get<Supplier[]>(this.baseUrl)
      .pipe(
        map((suppliers: Supplier[]) =>
          suppliers.map((supplier: Supplier) =>
            new Supplier(Math.random() * 100).deserialize(Supplier),
          ),
        ),
      );
  }

  deleteSupplier(supplier: Supplier): void {
    this.suppliersList.splice(this.suppliersList.indexOf(supplier), 1);
  }
}
