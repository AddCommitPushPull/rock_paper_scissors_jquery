$(document).ready( function() {
  var header = $('h1').text("Scissors, Rock, Paper")
  $('#title').text('Rock, Paper, Scissors')
  $('#rockDesc').text("***Geodude crushes Scissors with his hands***")
  $('#paperDesc').text("***Bill surrounds Geodude with legislation***")
  $('#scissorsDesc').text("***Scissors vetos Bill's power***")


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
  });
})