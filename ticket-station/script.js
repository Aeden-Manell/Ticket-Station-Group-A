// Function to validate form inputs
function validateForm() {
    // Retrieve input values
    let eventName = document.getElementById("eventName").value;
    let ticketType = document.getElementById("ticketType").value;
    let quantity = document.getElementById("quantity").value;
    let customerName = document.getElementById("customerName").value;
    let email = document.getElementById("email").value;
    let isValid = true; // Flag to track validity

    // Check if event name is empty
    if (eventName === "") {
        isValid = false;
        document.getElementById("eventNameError").innerText = "Please select an event.";
    } else {
        document.getElementById("eventNameError").innerText = "";
    }

    // Check if ticket type is empty
    if (ticketType.trim() === "") {
        isValid = false;
        document.getElementById("ticketTypeError").innerText = "Please enter the ticket type.";
    } else {
        document.getElementById("ticketTypeError").innerText = "";
    }

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
}

// Function to check email validity
function isValidEmail(email) {
    // Regular expression pattern for email validation
    let emailRegex = /\S+@\S+\.\S+/;
    // Test email against pattern
    return emailRegex.test(email);
}
