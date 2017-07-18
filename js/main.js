var cardOne;
var cardTwo;
var cards = ['king', 'king', 'queen', 'queen'];
var cardsInPlay = [];

cardOne = cards[0];
cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay[0] === cardsInPlay[1]) {
  alert('Yay you found a match');
} else {
  alert('Sorry try again');
}
