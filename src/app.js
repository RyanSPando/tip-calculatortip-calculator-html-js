$(function() {

  console.log('sanity check');

  $('form').on('submit', function(event) {
    event.preventDefault();

    var userInput = parseFloat(($('#total').val() || 0).replace(/[^0-9.]/g, ''));//Grab value from form, if no value, 0.  Replace all non digit charcacters and periods with empty string and then parseFloat the value.

    if (isNaN(userInput) || userInput < 0) {//check for a positive number, return error if not
      displayResults('<h1>This is not a valid input</h1>');
    }
    else {//output tip amount
      displayResults('<h1> You should tip $' + tipCalculation(userInput, 20) + '.</h1>');
    }
  });
});

function displayResults(h1Element) {//clear h1 element then add new one
  clearElement();
  $('#save').append(h1Element);
}

function tipCalculation(totalCheck, percentage) {//calculate tip and return value
  return ((totalCheck * percentage / 100).toFixed(2));
}

function clearElement() {//remove h1 element in div save
  $('#save > h1').remove();
}
