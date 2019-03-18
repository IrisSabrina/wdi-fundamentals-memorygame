var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = ["queen"];

cardsInPlay.push('cardOne');

console.log("User flipped " + cardOne);

var cardTwo = ["king"];

cardsInPlay.push('cardTwo');

console.log("User flipped " + cardTwo);

if (cardsInPlay[1]  === cardsInPlay[2]) {
	alert("You found a match!");
}
	else {
		alert("Sorry, try again.");
	}
	

