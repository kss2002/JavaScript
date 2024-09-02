document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = Array.from(document.getElementsByClassName('btn'));

  let currentInput = '';
  let operator = '';
  let previousInput = '';

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const value = event.target.getAttribute('data-value');

      if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        display.textContent = '0';
      } else if (value === '=') {
        if (currentInput !== '' && previousInput !== '' && operator !== '') {
          currentInput = eval(`${previousInput}${operator}${currentInput}`);
          display.textContent = currentInput;
          operator = '';
          previousInput = '';
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '') {
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        }
      } else {
        currentInput += value;
        display.textContent = currentInput;
      }
    });
  });
});
