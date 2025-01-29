import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Supplier } from '../models/supplier';
import { Invoice } from '../models/invoice';

@Injectable()
export class SupplierService {
  constructor(private httpClient: HttpClient) { }

  private suppliersList: Supplier[] = [];
  private baseUrl: string = environment.apiUrl + `/suppliers`;

  addSupplier(supplier: Supplier): Observable<Supplier> {
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
            new Supplier().deserialize(supplier),
          ),
        ),
      );
  }

  deleteSupplier(supplier: Supplier) {
    return this.httpClient.delete<Supplier>(`${this.baseUrl}/${supplier.id}`);
  }
  addInvoiceToSupplier(supplierId: string, invoice: Invoice): Observable<any> {
    return this.httpClient.get<Supplier[]>(this.baseUrl).pipe(
      map((suppliers: Supplier[]) => {
        const supplier = suppliers.find(s => s.id === supplierId);
        if (supplier) {
          supplier.invoices.push(invoice);
          return supplier;
        } else {
          throw new Error('Dostawca nie znaleziony');
        }
      }),
      switchMap((updatedSupplier: Supplier) => {
        return this.httpClient.put(`${this.baseUrl}/${supplierId}`, updatedSupplier);
      })
    );
  }

}
