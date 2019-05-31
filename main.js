$(document).ready( function() {
  var header = $('h1').text("BATTLE RESULTS")
  $('#title').text('CHOOSE YOUR CHAMPION')
  $('#rockDesc').text("***Geodude crushes Scissors with his hands***")
  $('#paperDesc').text("***Bill surrounds Geodude with legislation***")
  $('#scissorsDesc').text("***Scissors veto Bill's power***")


  $('#choices').on('change', function() {
    var choiceText;

    switch(this.value) {
      case 'rock':
        choiceText = 'Commited to smashing';
        break;
      case 'paper':
        choiceText = 'Gives paper cuts';
        break;
      case 'scissors':
        choiceText = 'Sharp!';
        break;
    }

    $('#selection').text(choiceText)

    var choices["rock", "paper", "scissors]
  });
})