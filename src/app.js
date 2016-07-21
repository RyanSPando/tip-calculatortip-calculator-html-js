$(function() {

  console.log('sanity check');

  $('form').on('submit', function(event) {//event handler grabs total from form
    event.preventDefault();

    var userInput = ($('#total').val() || 0);

    if ( isNaN(userInput) || parseInt(userInput) < 0) {
      displayResults('<h1>This is not a valid input</h1>');
    }
    else {
      displayResults('<h1> You should tip $' + tipCalculation(parseInt(userInput), 20) + '.</h1>');
      // $('#save').append('<h1> You should tip $' + tipCalculation(parseInt(userInput), 20) + '.</h1>');
    }

  })

});

function displayResults(h1Element) {//
  clearElement();
  $('#save').append(h1Element);
}

function tipCalculation(totalCheck, percentage) {
  return (totalCheck * percentage / 100).toFixed(2);
}

function clearElement(){
  $('#save > h1').remove()
}
