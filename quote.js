/*
 * Carlo Dino
 * Quote Generator Project
 * This file contains the code that updates the quotes on the front-end.
 */

const quotes = [
	"\"Every day with coffee is a good day!\"",
	"\"Stern brunch is the only reason I wake up on the weekends.\"",
	"\"Wear a helmet!\"",
	"\"Drink some coffee today!\""
];
const authors = [
	"Carlo Dino",
	"Donner Resident",
	"No one at Stanford",
	"Carlo Dino"
];

var previous = -1;

function generateQuote() {
	const quote = document.getElementById("quote");
 	const author = document.getElementById("author");

 	// ensure that quotes aren't replaced by the same quote
 	var index = previous;
 	while (index == previous) {
 		index = Math.floor(Math.random() * quotes.length);
 	}

 	// alter text
 	quote.textContent = quotes[index];
 	author.textContent = authors[index];
 	previous = index;
}