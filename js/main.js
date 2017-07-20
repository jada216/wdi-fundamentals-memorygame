// A constructor for a card object
function Card(rank, suit, cardImage) {
  this.rank = rank;
  this.suit = suit;
  this.cardImage = cardImage;
}

// Set the amount of rows you want for the memory game here
var ROWS = 4;
var cardsInPlay = [];
var unmatchedCards = [];
var cardsAvaliable = [];

var cards = [new Card('King', 'Hearts', 'images/king-of-hearts.png'),
new Card('King', 'Diamonds', 'images/king-of-diamonds.png'),
new Card('Queen', 'Hearts', 'images/queen-of-hearts.png'),
new Card('Queen', 'Diamonds', 'images/queen-of-diamonds.png')];

for(var i = 0; i < ROWS * cards.length; i++) {
  var cardNum = i % cards.length;
  cardsAvaliable.push(cards[cardNum]);
}


// Randomizes the cards on the board in and called from 'createBoard'
function randomizeCards() {
  while(cardsAvaliable.length !== 0) {
    var num = Math.floor(Math.random() * cardsAvaliable.length);
    unmatchedCards.push(cardsAvaliable[num]);
    cardsAvaliable.splice(num,1);
  }

  for(var j = 0; j < unmatchedCards.length; j++) {
    console.log(unmatchedCards[j].rank + unmatchedCards[j].suit);
  }
}

// Creates the memory game board
function createBoard() {
  randomizeCards();
  var count = 0;
  for(var i = 0; i < ROWS; i++) {
    for (var j = 0; j < cards.length; j++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', count);

      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
      count++;
    }
  }
}


// Called within the 'flipCard' function and checks if two cards match
function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert('Yay you found a match');
    cardsInPlay = [];
  } else {
    alert('Sorry try again');
    cardsInPlay = [];
  }
}

// Flips a card and if two cards are flipped, checks for a match
function flipCard() {
  var cardNum = this.getAttribute('data-id');
  console.log(cardNum);
  this.setAttribute('src', unmatchedCards[cardNum].cardImage);

  console.log('User flipped ' + unmatchedCards[cardNum].rank);

  cardsInPlay.push(unmatchedCards[cardNum].rank);

  if(cardsInPlay.length == 2) {
    setTimeout(checkForMatch, 200);
  }
}

createBoard();
