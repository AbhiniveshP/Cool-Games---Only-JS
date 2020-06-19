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

// Challenge 2: Cat Generator and Remover

function generateCat() {
    
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/dde.gif";
    div.appendChild(image);

}

function removeCat() {

    var div = document.getElementById('flex-cat-gen');
    if (div.children.length >= 1) {
        div.removeChild(div.lastChild);
    }
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    
    var humanChoice = yourChoice.id;
    var botChoice = numberToChoice( randomToRpsInt() );

    // get results as an array of human's points and bot's points
    results = decideWinner(humanChoice, botChoice);

    // get message as a string who won the game taking in the results array
    // of type dict -> {'message': 'You Won!, 'color': 'green'}
    message = getMessage(results);

    // what to display after the game is over
    rpsFrontEnd(humanChoice, botChoice, message);

}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(humanChoice, botChoice) {
    
    var rpsDataBase = {

        'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5}

    };

    var humanScore = rpsDataBase[humanChoice][botChoice];
    var botScore = Math.abs(1 - humanScore);

    return [humanScore, botScore];
}

function getMessage(results) {

    humanScore = results[0];
    botScore = results[1];

    if (humanScore < botScore) {
        return {'message': 'You Lost!', 'color': 'red'};
    }

    else if (humanScore > botScore) {
        return {'message': 'You Won!', 'color': 'green'};
    }

    else {
        return {'message': 'You Tied!', 'color': 'yellow'};
    }

}

function rpsFrontEnd(humanChoice, botChoice, finalMessage) {
    
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // once we click, first all images need to be removed.
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create divs for each element
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    // add inner html for all elements
    humanDiv.innerHTML = "<img src='" + imageDataBase[humanChoice] + " ' height= 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); '>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDataBase[botChoice] + " ' height= 150 width= 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1); '>";
   
    // append these as children to the main id element
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change the Color of All Buttons

var allButtons = document.getElementsByTagName('button');

// copy all original colors of all buttons in the same order and save it
var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(thisButton) {

    // get the value [random, red, green, reset]
    if (thisButton.value === 'red') buttonsRed();
    else if (thisButton.value === 'green') buttonsGreen();
    else if (thisButton.value === 'reset') buttonsReset();
    else if (thisButton.value === 'random') buttonsRandom();

}

function buttonsRed() {

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }

}

function buttonsGreen() {

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }

}

function buttonsReset() {

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }

}

function buttonsRandom() {

    let colorChoices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        let getRandomNumber = Math.floor(Math.random() * colorChoices.length);
        allButtons[i].classList.add(colorChoices[getRandomNumber]);
    }

}

// Challenge 5: BlackJack

let blackJackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
}

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

// the below line makes you avoid writing extra onEvent() stuff in HTML file.
document.querySelector('#blackjack-hit-button').addEventListener('click', blackJackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);

function blackJackHit() {

    let card = randomCard();
    showCard(card, YOU);
}

function randomCard() {
    let randomIndex = Math.floor( Math.random() * blackJackGame['cards'].length);
    return blackJackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function blackJackDeal() {
    
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    for (let i = 0; i < yourImages.length; i++) yourImages[i].remove();
    let dealarImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (let i = 0; i < dealarImages.length; i++) dealarImages[i].remove();

}