// Get form elements
const form = document.querySelector('.ticket-form'); 
// Get the form element with the class 'ticket-form'

const nameInput = document.querySelector('#ticket-form-name'); 
// Get the input element with the ID 'ticket-form-name'

const emailInput = document.querySelector('#ticket-form-email'); 
// Get the input element with the ID 'ticket-form-email'

const phoneInput = document.querySelector('input[name="ticket-form-phone"]'); 
// Get the input element with the name 'ticket-form-phone'

const ticketTypeRadios = document.querySelectorAll('input[name="TicketForm"]'); 
// Get all radio input elements with the name 'TicketForm'

const ticketNumberInput = document.querySelector('#ticket-form-number'); 
// Get the input element with the ID 'ticket-form-number'

const messageInput = document.querySelector('#ticket-form-message');
 // Get the input element with the ID 'ticket-form-message'

// Add event listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  validateForm(); // Call the validateForm function when the form is submitted
});

// Validation function
const validateForm = () => {
  let isValid = true; // Initialize the isValid flag to true

  // Name validation
  const nameValue = nameInput.value.trim(); // Get the trimmed value of the name input
  if (nameValue === '') { // If the name value is empty
    setError(nameInput, 'Name is required'); // Set an error message for the name input
    isValid = false; // Set the isValid flag to false
  } else {
    setSuccess(nameInput); // Otherwise, set the name input as valid
  }

  // Email validation
  const emailValue = emailInput.value.trim(); // Get the trimmed value of the email input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  if (emailValue === '') { // If the email value is empty
    setError(emailInput, 'Email is required'); // Set an error message for the email input
    isValid = false; // Set the isValid flag to false
  } else if (!emailRegex.test(emailValue)) { // If the email value doesn't match the regex
    setError(emailInput, 'Invalid email format'); // Set an error message for the email input
    isValid = false; // Set the isValid flag to false
  } else {
    setSuccess(emailInput); // Otherwise, set the email input as valid
  }

  // Phone validation
  const phoneValue = phoneInput.value.trim(); // Get the trimmed value of the phone input
  const phoneRegex = /^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/; // Regular expression for phone number validation
  if (phoneValue === '') { // If the phone value is empty
    setError(phoneInput, 'Phone number is required'); // Set an error message for the phone input
    isValid = false; // Set the isValid flag to false
  } else if (!phoneRegex.test(phoneValue)) { // If the phone value doesn't match the regex
    setError(phoneInput, 'Invalid phone number format'); // Set an error message for the phone input
    isValid = false; // Set the isValid flag to false
  } else {
    setSuccess(phoneInput); // Otherwise, set the phone input as valid
  }

  // Ticket type validation
  let ticketTypeSelected = false; // Initialize a flag to check if a ticket type is selected
  ticketTypeRadios.forEach((radio) => { // Loop through all radio inputs for ticket types
    if (radio.checked) { // If a radio input is checked
      ticketTypeSelected = true; // Set the flag to true
    }
  });
  if (!ticketTypeSelected) { // If no ticket type is selected
    setError(ticketTypeRadios[0], 'Please select a ticket type'); // Set an error message for the first radio input
    isValid = false; // Set the isValid flag to false
  } else {
    ticketTypeRadios.forEach((radio) => setSuccess(radio)); // Otherwise, set all radio inputs as valid
  }

  // Ticket number validation
  const ticketNumberValue = ticketNumberInput.value.trim(); // Get the trimmed value of the ticket number input
  if (ticketNumberValue === '' || isNaN(ticketNumberValue) || parseInt(ticketNumberValue) <= 0) { // If the ticket number value is empty, not a number, or less than or equal to 0
    setError(ticketNumberInput, 'Please enter a valid number of tickets'); // Set an error message for the ticket number input
    isValid = false; // Set the isValid flag to false
  } else {
    setSuccess(ticketNumberInput); // Otherwise, set the ticket number input as valid
  }

  // If all fields are valid, submit the form
  if (isValid) { // If the isValid flag is true
    form.submit(); // Submit the form
  }
};

// Helper functions
const setError = (input, message) => {
  const formControl = input.parentElement; // Get the parent element of the input (form control)
  const errorMessage = formControl.querySelector('.error-message'); // Get the existing error message element, if any
  if (errorMessage) { // If an error message element exists
    errorMessage.innerText = message; // Update the error message text
  } else { // If no error message element exists
    const errorDiv = document.createElement('div'); // Create a new div element
    errorDiv.classList.add('error-message'); // Add the 'error-message' class to the div
    errorDiv.innerText = message; // Set the error message text
    formControl.appendChild(errorDiv); // Append the div to the form control
  }
  formControl.classList.add('error'); // Add the 'error' class to the form control
};

const setSuccess = (input) => {
  const formControl = input.parentElement; // Get the parent element of the input (form control)
  formControl.classList.remove('error'); // Remove the 'error' class from the form control
  const errorMessage = formControl.querySelector('.error-message'); // Get the existing error message element, if any
  if (errorMessage) { // If an error message element exists
    errorMessage.remove(); // Remove the error message element
  }
};
  