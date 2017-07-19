var cards = [
  {
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
  {
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png"
  }
];

var cardsInPlay = [];


function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert('Yay you found a match');
  } else {
    alert('Sorry try again');
  }
}

function flipCard() {
  var cardNum = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardNum].cardImage);

  console.log('User flipped ' + cards[cardNum].rank);

  cardsInPlay.push(cards[cardNum].rank);

  if(cardsInPlay.length == 2) {
    checkForMatch();
  }
}

createBoard();
