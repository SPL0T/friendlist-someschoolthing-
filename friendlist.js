const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("#addfriends");
const delKaveri = document.querySelector("#delfriends");
const sortkaveri = document.querySelector("#sortfriends")
const test = document.querySelector("#test")
const Kaverilista = document.querySelector("#kaverit");


var Friends = [];

function linebreak() {
    var str = document.getElementById("kaverit").innerHTML; 
    var res = str.replace(/,/g, "<br>");
    document.getElementById("kaverit").innerHTML = res;
  }

function remover() {
var filtered = Friends.filter(Boolean);
Friends = filtered;}

function Lisääkaveri() {
remover();
Friends.unshift(Nimi.value);
Kaverilista.innerHTML.replace(",",".");
Kaverilista.innerText = Friends;
console.log(Friends);
Nimi.value="";
linebreak
console.log(Kaverilista.innerHTML)
}


function del() {
    Friends.shift();
    console.log(Friends);
    Kaverilista.innerText = Friends;
}

function sort() {
    Friends.sort();
    console.log(Friends);
    Kaverilista.innerText = Friends;
}

console.log(Friends)
sortfriends.onclick = sort
delKaveri.onclick = del
addKaveri.onclick = Lisääkaveri
