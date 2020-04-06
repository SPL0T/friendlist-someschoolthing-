const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("button");
const Kaverilista = document.querySelector(".kaverit")

let Friends = [];

function remover() {
var filtered = Friends.filter(Boolean);
Friends = filtered;}

function Lisääkaveri() {
if(Friends.length < 10) {
remover();
Friends.unshift(Nimi.value);
Kaverilista.innerText = Friends+" ";
Nimi.value="";
;}
else {
alert("Älä valehtele! et oo niin suosittu.");}
};
addKaveri.onclick = Lisääkaveri; 
