// Old prototype-based OOP
// function Customer() {
//     this.nazwaFirmy = "";
//     this.NIP = "";
//     this.miasto = "";
//     this.ulica = "";
//     this.numerDomu = "";
//     this.numerMieszkania = "";
//     this.kodPocztowy = "";
//     this.uwagi = "";
//     this.branza = "";
//     this.checkbox = "";
// }

// function Supplier(num) {
//     this.numerKonta = num;
//     this.faktury = []
// }

class Customer {
    constructor() { }
    nazwaFirmy = "";
    NIP = "";
    miasto = "";
    ulica = "";
    numerDomu = "";
    numerMieszkania = "";
    kodPocztowy = "";
    uwagi = "";
    branza = "";
    checkbox = "";

    getData() {
        return new String(
            this.nazwaFirmy + " " +
            this.NIP + " ul." +
            this.ulica + " " +
            this.numerDomu + "/" +
            this.numerMieszkania + " " +
            this.miasto + " " +
            this.kodPocztowy.substring(0, 2) + "-" + this.kodPocztowy.substring(2)
        )
    }


}

class Supplier extends Customer {
    constructor(num) {
        super();
        numerKonta = num;
    };
    faktury = []
}