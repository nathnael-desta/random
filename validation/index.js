const email = document.getElementById('mail');
const error = document.querySelector('.error');
const form = document.querySelector('form');
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('input', () => {
  if (
    email.value.length === 0
        || !emailRegExp.test(email.value)
        || email.value.length < 10
  ) {
    email.className = 'invalid';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log('working');
  if (
    email.value.length === 0
        || !emailRegExp.test(email.value)
        || email.value.length < 10
  ) {
    email.className = 'invalid';
    error.textContent = 'I expect an email, darling!';
    error.className = 'error active';
  } else {
    email.classList = 'valid';
    error.textContent = '';
    error.className = 'error';
  }
});
console.log('asdf')
console.log("asdf")