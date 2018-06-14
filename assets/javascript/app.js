$('#start').on('click', function() { 
    game.start(); 
});

var questions = [{
	question: "What is the alias of Black Widow from Marvel Universe?", 
	answers: ["Natalia Alianovna Romanova", "Gamora", "Jessica Jones", "Wanda Maximoff"], 
	correctAnswer: "Natalia Alianovna Romanova"
}, { 
	question: "Which Avengers is the wealthy American magnate, playboy, ingenious scientist?",
	answers: ["Tony Stark", "Emma Frost", "Black Panther", "Thor"], 
	correctAnswer: "Black Panther"
}, { 
	question: "Which character became abandoned and left to die but later was adopted as a Asgardian prince known as a God of Mischief?",
	answers: ["The Hulk", "Groot", "Loki", "Thanos"],
	correctAnswer: "Loki"
}, {
	question: "What is the salute in Black Panther?", 
	answers: ["Ragnorak", "Raccoon", "Infinity War", "Wakanda Forever"],
    correctAnswer: "Wakanda Forever"
}, {
    question: "What was Thor hammer’s name?",
    answers: ["Hela", "Mjolnir", "Ultron", "Thunder"],
    correctAnswer: "Mjolnir"
}];