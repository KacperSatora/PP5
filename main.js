const customers = []

function f1(e) {
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
        checkbox: document.getElementById("btncheck1").value
    };

    customers.push(customerData)
    hideForm();

    let ul = document.getElementById("customer-list");
    ul.innerHTML += `<li class="list-group-item">${customerData.nazwaFirmy}<button class="btn btn-primary" onclick="editField('${customerData.nazwaFirmy}')">Edit</button></li>`;

    console.log(customerData);


    var elements = document.getElementById("customer-form");
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

function f2() {
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
    let intendedCustomer;
    // operate on array, so that customer can be edited directly instead of pushing one
    customers.forEach(element => {
        
        if (element.nazwaFirmy === name) {
            intendedCustomer = element;
        }
    });

    console.log(intendedCustomer);

    document.getElementById("nazwa-firmy").value = intendedCustomer.nazwaFirmy;
    document.getElementById("nip").value = intendedCustomer.NIP;
    document.getElementById("miasto").value = intendedCustomer.miasto;
    document.getElementById("ulica").value = intendedCustomer.ulica;
    document.getElementById("numer-domu").value = intendedCustomer.numerDomu;
    document.getElementById("number-mieszkania").value = intendedCustomer.numerMieszkania;
    document.getElementById("kod-pocztowy").value = intendedCustomer.kodPocztowy;
    document.getElementById("uwagi").value = intendedCustomer.uwagi;
    document.getElementById("branza").value = intendedCustomer.branza;
    document.getElementById("btncheck1").value = intendedCustomer.checkbox;
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