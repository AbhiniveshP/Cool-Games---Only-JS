console.log("Hello");

// document.getElementById('someText').innerHTML = "Abhinivesh abpa6308";

function greeting(yourName, idName) {
    var result = 'Hello ' + yourName;
    document.getElementById(idName).innerHTML = result;
}

name = prompt("What's your name? ");

greeting(name, 'someText');


