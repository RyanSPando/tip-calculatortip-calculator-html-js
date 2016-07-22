$(function() {

  //assume 20% tip with no user input
  var tipPercentage = 20;

  //on click set tip percentage on dropdown
  $('#dropdown li input').on('click', function() {
    tipPercentage = parseFloat($(this).val().replace('%', ''));
  });

  //grab submit event
  $('form').on('submit', function(event) {
    event.preventDefault();

    //Grab value from form, if no value, 0.  Replace all non digit characters and periods with empty string and then parseFloat the value.

    var userInput = parseFloat(($('#total').val()).replace(/[^0-9.]/g, ''));

    //check for a positive number, return error if not.
    if (isNaN(userInput) || userInput < 0) {
      displayResults('<h1>This is not a valid input</h1>');
    }
    //output tip amount.
    else {
      displayResults('<h1> You should tip $' + tipCalculation(userInput, tipPercentage) + '.</h1>');
    }
  });
});

function displayResults(h1Element) {//clear h1 element then add new one.
  clearElement();
  $('#save').append(h1Element);
}

function tipCalculation(totalCheck, percentage) {//calculate tip and return. value
  return ((totalCheck * percentage / 100).toFixed(2));
}

function clearElement() {//remove h1 element in div save.
  $('#save > h1').remove();
}
