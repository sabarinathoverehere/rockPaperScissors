let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };

 updateScoreElement();



  function playGame(playerMove) {
    console.log("playGame(", playerMove, ")");

    const computerMove = pickComputerMove();
    console.log("Computer move is ", computerMove);
    
    let result = '';

    if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = 'You lose, better luck next time!';
      } else if (computerMove === 'Scissors') {
        result = 'Tie, you have another chance for a better result';
      } else if (computerMove === 'Paper') {
        result = 'You won, good job!';
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = 'You won, good job!';
      } else if (computerMove === 'Scissors') {
        result = 'You lose, better luck next time!';
      } else if (computerMove === 'Paper') {
        result = 'Tie, you have another chance for a better result';
      }
    } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result = 'Tie, you have another chance for a better result';
      } else if (computerMove === 'Scissors') {
        result = 'You won, good job!';
      } else if (computerMove === 'Paper') {
        result = 'You lose, better luck next time!';
      }
    }
    
    console.log("result is ", result);

    if (result === 'You won, good job!') {
      score.Wins++;
    } else if (result === 'You lose, better luck next time!') {
      score.Losses++;
    } else if (result === 'Tie, you have another chance for a better result') {
      score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector(".js-result")
   .innerHTML = result;

  document.querySelector(".js-moves")
   .innerHTML = `you
  <img src="images/${playerMove.toLowerCase()}-emoji.png" class ="move-icon">
  <img src ="images/${computerMove.toLowerCase()}-emoji.png" class = "move-icon">
  computer`;

  }



  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;

  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'Paper'; 
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'Scissors';
    }

    return computerMove;
  }

  function resetScore() {
    score = {
      Wins: 0,
      Losses: 0,
      Ties: 0
    };
    localStorage.setItem('score', JSON.stringify(score));
  
  }