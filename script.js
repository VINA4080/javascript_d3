var nameInput = document.getElementById('name_input');
var prenomInput = document.getElementById('prenom_input');
var dateInput = document.getElementById('date_input');
var ageInput = document.getElementById('age_input');
var adresseInput = document.getElementById('adresse_input');
var telInput = document.getElementById('tel_input');
var nameInfo = document.getElementById('name_info');
var prenomInfo = document.getElementById('prenom_info');
var dateInfo = document.getElementById('date_info');
var ageInfo = document.getElementById('age_info');
var adresseInfo = document.getElementById('adresse_info');
var telInfo = document.getElementById('tel_info');

nameInput.onkeyup = function() {
    var name = nameInput.value;
    nameInfo.innerText = name;
}
prenomInput.onkeyup = function() {
    var prenom = prenomInput.value;
    prenomInfo.innerText = prenom;
}
dateInput.onkeyup = function() {
    var date = dateInput.value;
    dateInfo.innerText = date;
}
ageInput.onkeyup = function() {
    var age = ageInput.value;
    ageInfo.innerText = age;
}
adresseInput.onkeyup = function() {
    var adresse = adresseInput.value;
    adresseInfo.innerText = adresse;
}
telInput.onkeyup = function() {
    var tel = telInput.value;
    telInfo.innerText = tel;
}