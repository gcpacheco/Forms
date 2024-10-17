    // JavaScript code for form validation

	// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', function(event) 
{
    event.preventDefault(); 

      // Retrieve the input field value
      let inputField = document.getElementById('inputField');
      let inputVar = inputField.value;

      // Regular expression pattern for alphanumeric input
      let alphanumericInput = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (alphanumericInput.test(inputVar)) {
        // Valid input: display confirmation and submit the form
        window.alert('Valid Input: The form was successfully submitted.')
      } else {
        // Invalid input: display error message
        window.alert('Invalid Input: Enter a valid alphanumeric value.')
      }
})

