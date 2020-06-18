console.log('Hello Abhinivesh...');

// Challenge 1: Your Age in Days

function ageInDays() {
    
    var birthYear = prompt('Which year were you born?');
    var ageInDay = (2020 - birthYear) * 365;
    
    var h2 = document.createElement('h2');
    var textAge = document.createTextNode('You are ' + ageInDay + ' days old !!!');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAge);
    document.getElementById('flex-box-result').appendChild(h2);

}

function resetAge() {

    document.getElementById('ageInDays').remove();
    
}

// Challenge 2: Cat Generator

function generateCat() {
    
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/dde.gif";
    div.appendChild(image);

}