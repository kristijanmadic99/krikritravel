const NameRegex = /^(?:(?:[A-ZČĆŠĐŽ][a-zčćšđž]{1,14}) +(?:[A-ZČĆŠĐŽ][a-zčćšđž]{1,14}))(?: +(?:[A-ZČĆŠĐŽ][a-zčćšđž]{1,14}))?$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[a-zA-Z0-9 .,!?()'"-]*$/;

function PrikaziError(tipError, daLiInput, labela) {
    if (daLiInput) daLiInput.style.border = "3px solid red";

    let porukaError = "";
    if (tipError === "regex") porukaError = "* Wrong format.";
    else if (tipError === "input") porukaError = "* Can't be empty.";
    else if (tipError === "check") porukaError = "* Select one.";

    if (labela) {
        if (!labela.querySelector('span')) {
            labela.innerHTML += ' <span style="color:red;">' + porukaError + '</span>';
        } else {
            labela.querySelector('span').textContent = porukaError;
        }
    }
}

function BrisiError(daLiInput, labela, vrednostName) {
    if (daLiInput) daLiInput.style.border = '';
    if (labela) labela.innerHTML = vrednostName;
}

function ValidacijaVrednosti(input) {
    let label = document.getElementById(input.id + "Lb");
    let vrednostName = '';
    let value = input.value.trim();

    if (input.dataset.validate === "Name") {
        vrednostName = "Name";
        if(value === "") {
            PrikaziError("input", input, label, vrednostName);
            return false;
        }

        if(!NameRegex.test(value)) {
            PrikaziError("regex", input, label, vrednostName);
            return false;
        }
    } 
    else if (input.dataset.validate === "email") {
        vrednostName = "Email";
        if(value === "") {
            PrikaziError("input", input, label, vrednostName);
            return false;
        }

        if(!emailRegex.test(value)) {
            PrikaziError("regex", input, label, vrednostName);
            return false;
        }
    } 
    else if (input.dataset.validate === "message") {
        vrednostName = "Message";
        if(value === "") {
            PrikaziError("input", input, label, vrednostName);
            return false;
        }

        if(!messageRegex.test(value)) {
            PrikaziError("regex", input, label, vrednostName);
            return false;
        }
    } 
    else if (input.dataset.validate === "date") {
        vrednostName = "Date";
        if(value === "") {
            PrikaziError("input", input, label, vrednostName);
            return false;
        }
    } 
    else return true;

    BrisiError(input, label, vrednostName);
    return true;
}

function ValidacijaDatuma() {
    const datum = document.getElementById("date");
    const greska = document.getElementById("greskaDatum");

    if (!datum.value) {
        greska.textContent = "Date can't be empty!";
        datum.style.border = "3px solid red";
        return false;
    }

    const danas = new Date();
    danas.setHours(0,0,0,0);
    let izabrani = new Date(datum.value);

    if (izabrani < danas) {
        greska.textContent = "Date must be in future!";
        datum.style.border = "3px solid red";
        return false;
    }

    greska.textContent = "";
    datum.style.border = "";
    return true;
}

function ValidacijaChecka(name, labelElement, vrednostName) {
    let selected = document.querySelector('input[name="' + name + '"]:checked');
    if (!selected) {
        PrikaziError('check', null, labelElement, vrednostName);
        return false;
    }

    BrisiError(null, labelElement, vrednostName);
    return true;
}

function ValidacijaSelecta(selectId, labelElement, vrednostName) {
    const select = document.getElementById(selectId);
    if (!select) return false;

    if (select.selectedIndex === 0) {
        PrikaziError('check', select, labelElement, vrednostName);
        return false;
    }

    BrisiError(select, labelElement, vrednostName);
    return true;
}


function ValidacijaSubmita() {
    let validity = true;
    ['Name', 'email', 'message', 'date'].forEach(function(id) {
        if (!ValidacijaVrednosti(document.getElementById(id)))
            validity = false;
    });
    if (!ValidacijaDatuma()) validity = false;
    if (!ValidacijaSelecta("chooseGuests", document.getElementById("guesErr"), "Number of Guests"))
        validity = false;
    if (!ValidacijaSelecta("chooseDestination", document.getElementById("desErr"), "Destination"))
        validity = false;
    if (!ValidacijaChecka("question", document.getElementById("questionLb"), "Services:"))
        validity = false;
    return validity;
}

document.addEventListener("DOMContentLoaded", function() {
    let numberGuest=['1','2','3','4+'];
    let ispis='<fieldset>'+
                    '<label for="chooseGuests" class="form-label fw-bold">Number Of Guests</label>'+
                    '<select name="Guests" class="form-select" aria-label="Default select example" id="chooseGuests">'+
                        '<option id="guesErr" value="0" selected>Choose the number of Guests</option>';
    for (let i = 0; i <= numberGuest.length-1; i++) {
        ispis+='<option value="'+numberGuest[i]+'">'+numberGuest[i]+'</option>';
    }
    ispis+='</select>'+
                '</fieldset>';
    document.getElementById("dropNumber").innerHTML=ispis;

    ispis='';
    let arrConCity=['Caribbean, Havana','Caribbean, Kingston','Caribbean, George Town','Switzerland, Zurich','Switzerland, Geneva','Switzerland, Bern','France, Paris','France, Colmar','France, Lyon','Thailand, Bangkok','Thailand, Chiang Mai','Thailand, Phuket']
    ispis='<fieldset>'+
                    '<label for="chooseDestination" class="form-label fw-bold">Choose Your Destination</label>'+
                    '<select name="Destination" class="form-select" aria-label="Default select example" id="chooseDestination">'+
                        '<option id="desErr" value="0" selected>Choose your vacation</option>';
    for (let i = 0; i <= arrConCity.length-1; i++) {
        ispis+='<option value="'+arrConCity[i]+'">'+arrConCity[i]+'</option>';
    }
    ispis += '</select>' + '</fieldset>';
    document.getElementById("dropDes").innerHTML = ispis;

    document.querySelectorAll('input[data-validate], textarea[data-validate]').forEach(el => {
        el.addEventListener('input', () => {
            ValidacijaVrednosti(el);
        });
    });

    document.querySelectorAll('input[name="question"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const label = document.getElementById('questionLb');
            ValidacijaChecka('question', label, 'Services:');
        });
    });

    const guestsSelect = document.getElementById("chooseGuests");
    const guestsLabel = document.getElementById("guesErr");

    guestsSelect.addEventListener("change", () => {
        ValidacijaSelecta("chooseGuests", guestsLabel, "Number of Guests");
    });

    const destinationSelect = document.getElementById("chooseDestination");
    const destinationLabel = document.getElementById("desErr");

    destinationSelect.addEventListener("change", () => {
        ValidacijaSelecta("chooseDestination", destinationLabel, "Destination");
    });

    const form = document.getElementById("reservation-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (ValidacijaSubmita()) {
            form.submit();
        }
    });
});

