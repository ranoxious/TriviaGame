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

var game = {
	correct: 0, 
	incorrect: 0, 
	counter: 30, 
	countdown: function() { 
		game.counter--; 
		$('#counter').html(game.counter);
		if(game.counter <=0) {
			console.log("Out of Time!"); 
			game.done(); 
        } 
    }, 
	start: function(){
		timer = setInterval(game.countdown, 1000); 
		$('#blonde').prepend('<h3> Time Remaining: <span id="counter"> 30</span> Seconds</h3>'); 
		$('#start').remove();  
		for (var i = 0; i < questions.length; i++) {
			$('#blonde').append('<h3>' + questions[i].question + '</h3>');
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#blonde").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j]); 
			}
		}
	},    

    done: function () { 
		//comparing the checked vs. correct at the 0th position in the array 
		$.each($("input[name='question-0']:checked"), function() {
			if($(this).val()==questions[0].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
        });
        
        $.each($("input[name='question-1']:checked"), function() {
			if($(this).val()==questions[1].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
        });
        
        $.each($("input[name='question-2']:checked"), function() {
			if($(this).val()==questions[2].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
        }); 
        
        $.each($("input[name='question-3']:checked"), function() {
			if($(this).val()==questions[3].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
        });
        
        $.each($("input[name='question-4']:checked"), function() {
			if($(this).val()==questions[4].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
        
        this.result(); 
	}, 
	result: function() { 
	clearInterval(timer); 
	$('#blonde h4').remove();
	$('#blonde').html("<h4>Complete!</h4>"); 
	$('#blonde').append("<h4>Correct Answers: "+this.correct+"</h4>");
	$('#blonde').append("<h4>Incorrect Answers: "+this.incorrect+"</h4>");
	$('#blonde').append("<h4>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h4>");
	}
}