const quotes = [
	{
		quote:"weakness of attitude becomes weakness of charactor.",
		author:"Albert Einstein",
	},
	{
		quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is",
		author:"Albert Einstein",
	},
	{
		quote:"Never underestimate your own ignorance.",
		author:"Albert Einstein",
	},
	{
		quote:"Try not to become a man of success but rather to become a man of value.",
		author:"Albert Einstein",
	},
	{
		quote:"It's not that I'm so smart, it's just that I stay with problems longer.",
		author:"Albert Einstein",
	},
	{
		quote:"When all think alike, no one thinks very much.",
		author:"Albert Einstein",
	},
	{
		quote:"Let every man be respected as an individual and no man idolized.",
		author:"Albert Einstein",
	},
	{
		quote:"An investmaent in knowledge still yields the best returns.",
		author:"Benjamin Franklin",
	},
	{
		quote:"Pride breakfasted with pelnty, dined with poverty, and supped with infamy.",
		author:"Benjamin Franklin",
	},
	{
		quote:"He that would live in peace and at ease, must not sprak all he knows nor judge all he sees.",
		author:"Benjamin Franklin",
	},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[﻿Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;