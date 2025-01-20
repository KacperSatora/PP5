"use strict";
// TODO:
// add an ID to a customer, so that two of them can coexist under the same name
const customers = [];
const formInputs = [
  "nazwa-firmy",
  "nip",
  "miasto",
  "ulica",
  "numer-domu",
  "number-mieszkania",
  "kod-pocztowy",
  "uwagi",
  "branza",
  "btncheck1",
];
function addCustomer(e) {
  e.preventDefault();
  let newCustomer = new Customer();
  // newCustomer.nazwaFirmy = document.getElementById("nazwa-firmy").value
  // ...
  newCustomer.nazwaFirmy = document.getElementById("nazwa-firmy").value;
  newCustomer.NIP = document.getElementById("nip").value;
  newCustomer.miasto = document.getElementById("miasto").value;
  newCustomer.ulica = document.getElementById("ulica").value;
  newCustomer.numerDomu = document.getElementById("numer-domu").value;
  newCustomer.numerMieszkania =
    document.getElementById("number-mieszkania").value;
  newCustomer.kodPocztowy = document.getElementById("kod-pocztowy").value;
  newCustomer.uwagi = document.getElementById("uwagi").value;
  newCustomer.branza = document.getElementById("branza").value;
  newCustomer.checkbox = document.getElementById("btncheck1").value;
  // const newCustomer = {
  //     nazwaFirmy: document.getElementById("nazwa-firmy").value,
  //     NIP: document.getElementById("nip").value,
  //     miasto: document.getElementById("miasto").value,
  //     ulica: document.getElementById("ulica").value,
  //     numerDomu: document.getElementById("numer-domu").value,
  //     numerMieszkania: document.getElementById("number-mieszkania").value,
  //     kodPocztowy: document.getElementById("kod-pocztowy").value,
  //     uwagi: document.getElementById("uwagi").value,
  //     branza: document.getElementById("branza").value,
  //     checkbox: document.getElementById("btncheck1").value,
  // };
  let existingCustomer = customers.find(
    (obj) => obj.nazwaFirmy === document.getElementById("nazwa-firmy").value,
  );
  if (!existingCustomer) {
    customers.push(newCustomer);
    let ul = document.getElementById("customer-list");
    ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">${newCustomer.getData()}<button class="btn btn-primary" onclick="editField('${newCustomer.nazwaFirmy}')">Edit</button></li>`;
  } else {
    let index = customers.indexOf(existingCustomer);
    customers[index].nazwaFirmy = document.getElementById("nazwa-firmy").value;
    customers[index].NIP = document.getElementById("nip").value;
    customers[index].miasto = document.getElementById("miasto").value;
    customers[index].ulica = document.getElementById("ulica").value;
    customers[index].numerDomu = document.getElementById("numer-domu").value;
    customers[index].numerMieszkania =
      document.getElementById("number-mieszkania").value;
    customers[index].kodPocztowy =
      document.getElementById("kod-pocztowy").value;
    customers[index].uwagi = document.getElementById("uwagi").value;
    customers[index].branza = document.getElementById("branza").value;
    customers[index].checkbox = document.getElementById("btncheck1").value;
  }
  hideForm();
  unlockForm();
  clearForm();
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
  lockForm();
}
function editField(name) {
  const intendedCustomerIndex = customers.indexOf(
    customers.find((c) => c.nazwaFirmy === name),
  );
  document.getElementById("nazwa-firmy").value =
    customers[intendedCustomerIndex].nazwaFirmy;
  document.getElementById("nip").value = customers[intendedCustomerIndex].NIP;
  document.getElementById("miasto").value =
    customers[intendedCustomerIndex].miasto;
  document.getElementById("ulica").value =
    customers[intendedCustomerIndex].ulica;
  document.getElementById("numer-domu").value =
    customers[intendedCustomerIndex].numerDomu;
  document.getElementById("number-mieszkania").value =
    customers[intendedCustomerIndex].numerMieszkania;
  document.getElementById("kod-pocztowy").value =
    customers[intendedCustomerIndex].kodPocztowy;
  document.getElementById("uwagi").value =
    customers[intendedCustomerIndex].uwagi;
  document.getElementById("branza").value =
    customers[intendedCustomerIndex].branza;
  document.getElementById("btncheck1").value =
    customers[intendedCustomerIndex].checkbox;
  showForm();
}
function showForm() {
  document.getElementById("customer-form").style.display = "block";
  document.getElementById("fill-data-button").style.display = "inline-block";
  document.getElementById("clear-form-button").style.display = "inline-block";
  document.getElementById("customer-list").style.display = "none";
}
function hideForm() {
  document.getElementById("customer-form").style.display = "none";
  document.getElementById("fill-data-button").style.display = "none";
  document.getElementById("clear-form-button").style.display = "none";
  document.getElementById("customer-list").style.display = "block";
}
function lockForm() {
  formInputs.forEach((formId) => {
    document.getElementById(formId).readOnly = true;
  });
}
function unlockForm() {
  formInputs.forEach((formId) => {
    document.getElementById(formId).readOnly = false;
  });
}
function clearForm() {
  document.getElementById("customer-form").reset();
  unlockForm();
}
