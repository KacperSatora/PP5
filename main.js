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
    }

    console.log(formData)
}

function f2(e) {
    e.preventDefault();
}