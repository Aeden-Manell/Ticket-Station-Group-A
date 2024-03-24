document.querySelectorAll('input[name="payment-method"]').forEach((input) => {
  input.addEventListener('change', (event) => {
    const selectedMethod = event.target.value;
    document.querySelectorAll('.payment-form').forEach((form) => {
      if (form.id === `${selectedMethod}-form`) {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
      }
    });
  });
});