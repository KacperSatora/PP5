import { Invoice } from './invoice';

export class Supplier {


  constructor() { }

  id: string | undefined;
  name = '';
  nip = '';
  miasto = '';
  ulica = '';
  number = '';
  numerMieszkania = '';
  kod = '';
  uwagi = '';
  branza = '';
  check = true;
  invoices: Invoice[] = [];

  getAddress() {
    return (
      this.kod +
      ' ' +
      this.miasto +
      ' ul.' +
      this.ulica +
      ' nr.' +
      this.number +
      ' nr.mieszkania ' +
      this.numerMieszkania
    );
  }
  getSupplierInfo(): string {
    return `${this.name} (${this.nip})`;
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
