function f1(e) {
    e.preventDefault();

    const formData = {
        nazwaFirmy: document.getElementById("nazwa-firmy").value,
        NIP: document.getElementById("nip").value,
        miasto: document.getElementById("miasto").value,
        ulica: document.getElementById("ulica").value,
        numberDomu: document.getElementById("numer-domu").value,
        numerMieszkania: document.getElementById("number-mieszkania").value,
        kodPocztowy: document.getElementById("kod-pocztowy").value,
        uwagi: document.getElementById("uwagi").value,
        branza: document.getElementById("branza").value,
        checkbox: document.getElementById("btncheck1").value
    };

    console.log(formData);
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
    document.getElementById("btncheck1").value = "true";
}