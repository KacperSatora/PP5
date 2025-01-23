import { Routes } from '@angular/router';

import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { CustomerListComponentComponent } from './invoice/customer-list-component/customer-list-component.component';

export const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () =>
      import('./invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  // { path: 'customer-list', component: CustomerListComponentComponent }
];
