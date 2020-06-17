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