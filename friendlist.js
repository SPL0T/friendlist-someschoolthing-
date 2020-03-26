const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("button");
const Kaverilista = document.querySelector(".kaverit")

const Friends = [];

function Lisääkaveri() {
if(Friends.length < 10) {
Friends.unshift(Nimi.value);
Kaverilista.innerHTML +="<br>";
Kaverilista.innerText += Friends[0]}
else {
alert("Älä valehtele! et oo niin suosittu.");}
};

addKaveri.onclick = Lisääkaveri; 
