// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Email form handler
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic email validation
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.focus();
    return;
  }

  // Show success message
  successMessage.classList.add('show');

  // Reset form
  form.reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 5000);
});

// Optional: Hide success message if user starts typing again
emailInput.addEventListener('input', () => {
  if (successMessage.classList.contains('show')) {
    successMessage.classList.remove('show');
  }
});