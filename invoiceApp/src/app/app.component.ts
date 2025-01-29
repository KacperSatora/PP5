import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { InvoiceModule } from './invoice/invoice.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router,) { }
  title = 'Kacper Satora, Jan Paluch';

  navigateTo(val: number) {
    switch (val) {
      case 1:
        this.router.navigate(["/invoice/customer-form"])
        break;
      case 2:
        this.router.navigate(["/invoice/supplier-form"])
        break;
      case 3:
        this.router.navigate(["/invoice/product-form"])
        break;

      default:
        break;
    }
  }
}
