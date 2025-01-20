import { Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './invoice/customer-list-component/customer-list-component.component';

export const routes: Routes = [
  { path: 'product-form', component: ProductFormComponent },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  // { path: 'customer-list', component: CustomerListComponentComponent }
];
