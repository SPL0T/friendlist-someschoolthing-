const Nimi = document.querySelector("input");
const addKaveri = document.querySelector("#addfriends");
const delKaveri = document.querySelector("#delfriends");
const sortkaveri = document.querySelector("#sortfriends")
const test = document.querySelector("#test")
const Kaverilista = document.querySelector("#kaverit");


let Friends = [];
let Printable

function linebreaker() {
    let separator=Friends.join(":muC4piPojMpxTF1yl0B4sRHxC13FvcL6UeFNUFzAKH3fvXKNnxTNKGotJu4LrqjN5394zfg1MxOcHsxMqDLJT8Qf3PU2Cc9QtdjDhlICev2ZcfUolIVZYm9XUhr4WZnXmrhSeVm1otEIU1Gi7EIomrYz3sHCS9k72qoHP6N7cwMHOagWrDPbm6L3r4fHnGM4mGumP7At5iW1pZJMCsRuI01IzczK1on4XmzufsWmBAX7jcAo6XaZS0Z52akvk6Zq:");
    Printable = separator
}

function remover() {
var filtered = Friends.filter(Friends => Friends.length > 2);
Friends = filtered;}

function Lisääkaveri() {
Friends.unshift(Nimi.value);
remover();
linebreaker();
Kaverilista.innerText = Printable;
LinebreakerSafe();
Nimi.value="";
}


function del() {
    Friends.shift();
    linebreaker();
    Kaverilista.innerText = Printable;
    LinebreakerSafe();
}

function sort() {
    Friends.sort();
    linebreaker();
    Kaverilista.innerText = Printable;
    LinebreakerSafe();
}

function LinebreakerSafe() {
    var res = Kaverilista.innerHTML.replace(/:muC4piPojMpxTF1yl0B4sRHxC13FvcL6UeFNUFzAKH3fvXKNnxTNKGotJu4LrqjN5394zfg1MxOcHsxMqDLJT8Qf3PU2Cc9QtdjDhlICev2ZcfUolIVZYm9XUhr4WZnXmrhSeVm1otEIU1Gi7EIomrYz3sHCS9k72qoHP6N7cwMHOagWrDPbm6L3r4fHnGM4mGumP7At5iW1pZJMCsRuI01IzczK1on4XmzufsWmBAX7jcAo6XaZS0Z52akvk6Zq:/g,"<br>")
    Kaverilista.innerHTML = res
}

sortfriends.onclick = sort
delKaveri.onclick = del
addKaveri.onclick = Lisääkaveri
