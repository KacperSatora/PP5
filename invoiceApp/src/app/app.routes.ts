import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () =>
      import('./invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  // { path: 'customer-list', component: CustomerListComponentComponent }
];
