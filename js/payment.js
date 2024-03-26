class PaymentForm {
  constructor() {
    this.form = document.getElementById("payment-form");
    this.cardholderNameInput = document.getElementById("cardholder-name");
    this.cardNumberInput = document.getElementById("card-number");
    this.expiryDateInput = document.getElementById("expiry-date");
    this.cvvInput = document.getElementById("cvv");
    this.saveCardCheckbox = document.getElementById("save_card");
    this.confirmPaymentButton = document.querySelector(".btn-pay");

    this.form.addEventListener("submit", this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();

    // Validate cardholder name
    const cardholderName = this.cardholderNameInput.value.trim();
    if (cardholderName === "") {
      alert("Please enter cardholder name.");
      return false;
    }

    // Validate card number
    const cardNumber = this.cardNumberInput.value.trim();
    if (cardNumber === "") {
      alert("Please enter card number.");
      return false;
    }

    // Validate expiry date
    const expiryDate = this.expiryDateInput.value.trim();
    const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    if (!dateRegex.test(expiryDate)) {
      alert("Please enter a valid expiry date in MM/YY format.");
      return false;
    }

    const [month, year] = expiryDate.split("/").map((part) => parseInt(part));
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      alert("Card has expired.");
      return false;
    }

    // Validate CVV
    const cvv = this.cvvInput.value.trim();
    if (cvv === "") {
      alert("Please enter CVV.");
      return false;
    }

    // Confirm payment
    this.confirmPayment();
    return true;
  }

  confirmPayment() {
    // Code to confirm payment
    alert("Payment confirmed!");
  }
}

// Initialize the payment form
const paymentForm = new PaymentForm();
