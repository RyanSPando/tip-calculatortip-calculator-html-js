(function() {
  'use strict';
  console.log('sanity check');

  $('#sign-form').on('submit', function(event) {
    event.preventDefault();
     var inputs = $('#sign-form:input');
     console.log(inputs);

     var values = {};
     inputs.each(function() {
       values[this.name] = $(this).val();
       });
     console.log(values);
  });




}());
