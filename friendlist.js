const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("button");
const Kaverilista = document.querySelector(".kaverit")

let Friends = [];

function remover() {
var filtered = Friends.filter(Boolean);
Friends = filtered;
console.log(Friends);}

function linebreak() {
    Kaverilista.innerHTML +="<br>";
}

function Lisääkaveri() {
if(Friends.length < 10) {
remover();
Friends.unshift(Nimi.value);
var filtered = Friends.filter(Boolean);
Friends = filtered
console.log(Friends)
Kaverilista.innerText = Friends;
console.log(Friends)
;}
else {
alert("Älä valehtele! et oo niin suosittu.");}
};
addKaveri.onclick = Lisääkaveri; 
