const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("button");
const Kaverilista = document.querySelector(".kaverit")

let Friends = [];
let Printable

function linebreaker() {
    let separator=Friends.join(":muC4piPojMpxTF1yl0B4sRHxC13FvcL6UeFNUFzAKH3fvXKNnxTNKGotJu4LrqjN5394zfg1MxOcHsxMqDLJT8Qf3PU2Cc9QtdjDhlICev2ZcfUolIVZYm9XUhr4WZnXmrhSeVm1otEIU1Gi7EIomrYz3sHCS9k72qoHP6N7cwMHOagWrDPbm6L3r4fHnGM4mGumP7At5iW1pZJMCsRuI01IzczK1on4XmzufsWmBAX7jcAo6XaZS0Z52akvk6Zq:");
    Printable = separator
}

function LinebreakerSafe() {
    var res = Kaverilista.innerHTML.replace(/:muC4piPojMpxTF1yl0B4sRHxC13FvcL6UeFNUFzAKH3fvXKNnxTNKGotJu4LrqjN5394zfg1MxOcHsxMqDLJT8Qf3PU2Cc9QtdjDhlICev2ZcfUolIVZYm9XUhr4WZnXmrhSeVm1otEIU1Gi7EIomrYz3sHCS9k72qoHP6N7cwMHOagWrDPbm6L3r4fHnGM4mGumP7At5iW1pZJMCsRuI01IzczK1on4XmzufsWmBAX7jcAo6XaZS0Z52akvk6Zq:/g,"<br>")
    Kaverilista.innerHTML = res
}

function remover() {
var filtered = Friends.filter(Friends => Friends.length > 2);
Friends = filtered;}

function Lisääkaveri() {
if(Friends.length < 10) {
Friends.unshift(Nimi.value);
remover();
linebreaker();
Kaverilista.innerText = Printable;
LinebreakerSafe();
Nimi.value="";
;}
else {
alert("Älä valehtele! et oo niin suosittu.");}
};
addKaveri.onclick = Lisääkaveri; 
