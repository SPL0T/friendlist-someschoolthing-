const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("#addfriends");
const delKaveri = document.querySelector("#delfriends");
const sortkaveri = document.querySelector("#sortfriends")
const test = document.querySelector("#test")
const Kaverilista = document.querySelector("#kaverit");


let Friends = [];
let Printable

function linebreaker() {
    let separator=Friends.join("  :  ");
    Printable = separator
}


function remover() {
var filtered = Friends.filter(Friends => Friends.length > 2);
Friends = filtered;}

function Lisääkaveri() {
Friends.unshift(Nimi.value);
remover();
linebreaker();

Kaverilista.innerText = Printable
Nimi.value="";

}


function del() {
    Friends.shift();
    console.log(Friends);    linebreaker();
    Kaverilista.innerText = Printable;
}

function sort() {
    Friends.sort();
    linebreaker();
    Kaverilista.innerText = Printable;
}

function testi() {
    var res = Kaverilista.innerHTML.replace(":","<br>")
    Kaverilista.innerHTML = res
    console.log(Kaverilista.outerHTML);
}

console.log(Friends)
sortfriends.onclick = sort
delKaveri.onclick = del
addKaveri.onclick = Lisääkaveri
test.onclick = testi
