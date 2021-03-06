/* global $ */

$('#player1-name').focus();

let game = new Game();

$('.start-game-button').on('click', function() {
  event.preventDefault(); 
  removeNewGameScreen();
  let playerArray = getPlayerNames();
  game.getPlayers(playerArray); 
  game.getPuzzleBank(); 
  game.startRound();
})

$('.spin-button').on('click', function() {
  game.spinWheel()
})

$('.keyboard').on('click', function() {
  game.checkLetter(event)
  $(event.target).prop("disabled", true).addClass("selected")
})

$('.solution-input-button').on('click', function() {
  event.preventDefault(); 
  let solution = $('#solution-input').val()
  game.solvePuzzle(solution)
})

function removeNewGameScreen() {
  $('.new-game-screen-container').toggle('display')
}

function getPlayerNames() {
  let player1Name = $('#player1-name').val();
  let player2Name = $('#player2-name').val();
  let player3Name = $('#player3-name').val();
  return [player1Name, player2Name, player3Name];
}
