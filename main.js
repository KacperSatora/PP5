// TODO:
// add an ID to a customer, so that two of them can coexist under the same name

const customers = [];

function addCustomer(e) {
    e.preventDefault();

    const customerData = {
        nazwaFirmy: document.getElementById("nazwa-firmy").value,
        NIP: document.getElementById("nip").value,
        miasto: document.getElementById("miasto").value,
        ulica: document.getElementById("ulica").value,
        numerDomu: document.getElementById("numer-domu").value,
        numerMieszkania: document.getElementById("number-mieszkania").value,
        kodPocztowy: document.getElementById("kod-pocztowy").value,
        uwagi: document.getElementById("uwagi").value,
        branza: document.getElementById("branza").value,
        checkbox: document.getElementById("btncheck1").value,
    };

    let existingCustomer = customers.find(obj => obj.nazwaFirmy === document.getElementById("nazwa-firmy").value);
    if (!existingCustomer) {
        customers.push(customerData)
        let ul = document.getElementById("customer-list");
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">${customerData.nazwaFirmy}<button class="btn btn-primary" onclick="editField('${customerData.nazwaFirmy}')">Edit</button></li>`;
    } else {
        let index = customers.indexOf(existingCustomer)
        customers[index].nazwaFirmy = document.getElementById("nazwa-firmy").value
        customers[index].NIP = document.getElementById("nip").value
        customers[index].miasto = document.getElementById("miasto").value
        customers[index].ulica = document.getElementById("ulica").value
        customers[index].numerDomu = document.getElementById("numer-domu").value
        customers[index].numerMieszkania = document.getElementById("number-mieszkania").value
        customers[index].kodPocztowy = document.getElementById("kod-pocztowy").value
        customers[index].uwagi = document.getElementById("uwagi").value
        customers[index].branza = document.getElementById("branza").value
        customers[index].checkbox = document.getElementById("btncheck1").value
    }
    hideForm();

    var elements = document.getElementById("customer-form");
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

function fillData() {
    document.getElementById("nazwa-firmy").value = "Super Firma";
    document.getElementById("nip").value = "1122334455";
    document.getElementById("miasto").value = "Krakow";
    document.getElementById("ulica").value = "Biezanowska";
    document.getElementById("numer-domu").value = 5;
    document.getElementById("number-mieszkania").value = 1;
    document.getElementById("kod-pocztowy").value = 32020;
    document.getElementById("uwagi").value = "brak";
    document.getElementById("branza").value = 1;
    document.getElementById("btncheck1").value = "false";
}

function editField(name) {
    let intendedCustomerIndex;
    // operate on array, so that customer can be edited directly instead of pushing one
    for (let index = 0; index < customers.length; index++) {
        const element = customers[index];
        if (customers[index].nazwaFirmy === name) {
            intendedCustomerIndex = index;
        }
    }

    console.log(customers[intendedCustomerIndex]);
    document.getElementById("nazwa-firmy").value = customers[intendedCustomerIndex].nazwaFirmy;
    document.getElementById("nip").value = customers[intendedCustomerIndex].NIP;
    document.getElementById("miasto").value = customers[intendedCustomerIndex].miasto;
    document.getElementById("ulica").value = customers[intendedCustomerIndex].ulica;
    document.getElementById("numer-domu").value = customers[intendedCustomerIndex].numerDomu;
    document.getElementById("number-mieszkania").value = customers[intendedCustomerIndex].numerMieszkania;
    document.getElementById("kod-pocztowy").value = customers[intendedCustomerIndex].kodPocztowy;
    document.getElementById("uwagi").value = customers[intendedCustomerIndex].uwagi;
    document.getElementById("branza").value = customers[intendedCustomerIndex].branza;
    document.getElementById("btncheck1").value = customers[intendedCustomerIndex].checkbox;
    showForm();
}

function showForm() {
    document.getElementById('customer-form').style.display = 'block'
    document.getElementById('customer-list').style.display = 'none'
}

function hideForm() {
    document.getElementById('customer-form').style.display = 'none'
    document.getElementById('customer-list').style.display = 'block'
}