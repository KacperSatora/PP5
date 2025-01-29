export class Product {
    constructor() { }
    id: string | undefined;
    name = '';
    category = '';
    price = '';
    tax = '';

    getInfo() {
        return (
            this.name +
            ' ' +
            this.category +
            ' ' +
            this.price +
            ' zł.' +
            this.tax +
            ' %'
        );
    }
    getProductPrice(): string {
        return `${this.name} (${this.price})`;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
