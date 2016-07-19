//create a function that resets the game


function newGame(){
  var randomNumber = Math.ceil(Math.random()*100);
  var guessCount = 0;
  // For future, change to submit by form:
  $('#guessButton').click(function(e){
    e.preventDefault();
    // if('#userGuess').val().length === 0 ){return false};
    // get the user's number
    var userNumber = $('#userGuess').val();
    $('#userGuess').val('');
    // VALIDATE!!! need to make sure its a number parseInt, also in between 1-100
    userNumber = parseInt(userNumber);
    if (0 > userNumber > 100){
      return false;
    }
    // compare it to the random number chosen
    var compared = Math.abs(randomNumber - userNumber);
    var feedback = "";
    // Over 50 away == "Ice Cold"
    // Between 30 and 49 === "Cold"
    // if they are between 20 and 30 they are warm
    // between 10 and 20 hot
    // between 1 and 10 "very hot"
    if(compared >= 50){
      feedback = 'You are ICE COLD';
    }
    else if(30 <= compared <= 49){
      feedback = 'COLD';
    }
    else if(20 <= compared <= 29){
      feedback = 'WARM';
    }
    else if(10 <= compared <= 19){
      feedback = 'HOT';
    }
    else if(1 <= compared <= 9){
      feedback = 'VERY HOT';
    }
    else if(compared === 0){
      feedback = 'YOU WIN!!!';
    }
    // change feedback text
    $('#feedback').text(feedback);
    // increment guess number
    guessCount += 1;
    $('#count').text(guessCount);
    // show number the input number in the list
    $('#guessList').append('<li>' + userNumber + '</li>');
    // clear the input field
    
    // // if they guess correctly, restart game
    if(compared === 0) {
      location.reload();
    }
  });

}

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    newGame();
});


