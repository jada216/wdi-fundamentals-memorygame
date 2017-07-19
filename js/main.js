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




function checkForMatch() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert('Yay you found a match');
  } else {
    alert('Sorry try again');
  }
}

function flipCard(cardID) {
  console.log('User flipped ' + cards[cardID].rank);

  cardsInPlay.push(cards[cardID].rank);
  checkForMatch();
}

flipCard(0);
flipCard(2);
