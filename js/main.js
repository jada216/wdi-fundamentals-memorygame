// A constructor for a card object
function Card(rank, suit, cardImage) {
  this.rank = rank;
  this.suit = suit;
  this.cardImage = cardImage;
}

// Set the amount of rows you want for the memory game here
var ROWS = 4;
var cardsInPlay = [];

var cards = [new Card('King', 'Hearts', 'images/king-of-hearts.png'),
new Card('King', 'Diamonds', 'images/king-of-diamonds.png'),
new Card('Queen', 'Hearts', 'images/queen-of-hearts.png'),
new Card('Queen', 'Diamonds', 'images/queen-of-diamonds.png')];

// Creates the memory game board
function createBoard() {
  for(var i = 0; i < ROWS; i++) {
    for (var j = 0; j < cards.length; j++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);

      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
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
  this.setAttribute('src', cards[cardNum].cardImage);

  console.log('User flipped ' + cards[cardNum].rank);

  cardsInPlay.push(cards[cardNum].rank);

  if(cardsInPlay.length == 2) {
    setTimeout(checkForMatch, 200);
  }
}

createBoard();
