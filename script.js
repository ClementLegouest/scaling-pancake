let speciesSelect = document.getElementById("species_select");
let genderSelect = document.getElementById("gender_select");

const NAMES = {
    dunmer: {
        male: [
            "Mondenc",
            "Rolithyr",
            "Bornelen",
            "Bilrius",
            "Fotyan",
            "Iledel",
            "Gilehe",
            "Tythle",
            "Brayhus",
            "Benarus"
        ],
        female: [
            "Mundronu",
            "Faleane",
            "Sovimila",
            "Breana",
            "Evesnziah",
            "Favamyna",
            "Nalmvsa",
            "Runevasi",
            "Idrith",
            "Relda"
        ],
        lastname: [
            "Adusarian",
            "Mololis",
            "Rurvral",
            "Dulfhalen",
            "Melsndes",
            "Maryyron",
            "Ravleth",
            "Eldas",
            "Neredran",
            "Drotis"
        ]
    }
}

function getName(characterInfo) {
    if (characterInfo.gender == "" || characterInfo.species == "") {
        alert("You must select a species and a gender");
        return;
    }
    switch (characterInfo.species) {
        case value:"dunmer"
            console.log("dunmer");
            break;
        default:
            console.log("John Doe");
            break;
    }
    alert(`${characterInfo.gender} ${characterInfo.species}`);
}

function generate() {
    getName({species: speciesSelect.value, gender: genderSelect.value});
}