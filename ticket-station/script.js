const eventPrices = {
    cottonFest: 200,
    theSoil: 300,
    hatfieldFreshers: 150
  };
  
  const form = document.getElementById('ticketForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const eventSelected = document.getElementById('event').value;
    const tickets = parseInt(document.getElementById('tickets').value);
  
    // Validate number of tickets
    if (isNaN(tickets) || tickets < 1) {
      alert('Please enter a valid number of tickets.');
      return;
    }
  
    // Calculate total price based on the selected event and number of tickets
    const totalPrice = tickets * eventPrices[eventSelected];
  
    // Redirect to payment gateway
    const paymentGatewayUrl = 'payment.html';
    const redirectUrl = `${paymentGatewayUrl}?event=${encodeURIComponent(eventSelected)}&tickets=${tickets}&total=${totalPrice}`;
    window.location.href = redirectUrl;
  
    // Check if quantity is valid
    if (quantity <= 0 || isNaN(quantity)) {
      isValid = false;
      document.getElementById("quantityError").innerText = "Please enter a valid quantity.";
    } else {
      document.getElementById("quantityError").innerText = "";
    }
  
    // Check if customer name is empty
    if (customerName.trim() === "") {
      isValid = false;
      document.getElementById("customerNameError").innerText = "Please enter your name.";
    } else {
      document.getElementById("customerNameError").innerText = "";
    }
  
    // Check if email is valid
    if (!isValidEmail(email)) {
      isValid = false;
      document.getElementById("emailError").innerText = "Please enter a valid email address.";
    } else {
      document.getElementById("emailError").innerText = "";
    }
  
    // Return overall validity
    return isValid;
  });
  
  // Function to check email validity
  function isValidEmail(email) {
    // Regular expression pattern for email validation
    let emailRegex = /\S+@\S+\.\S+/;
    // Test email against pattern
    return emailRegex.test(email);
  }
  