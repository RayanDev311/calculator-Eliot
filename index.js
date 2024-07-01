document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  let currentTheme = 'style1.css'; //  default Theme
  const themeStyles = {
      'style1': 'style1.css',
      'style2': 'style2.css',
      'style3': 'style3.css'
  };

  themeToggle.addEventListener('click', function() {
      // Change theme
      switchTheme();
  });

  function switchTheme() {
      // next theme
      if (currentTheme === 'style1') {
          currentTheme = 'style2';
      } else if (currentTheme === 'style2') {
          currentTheme = 'style3';
      } else {
          currentTheme = 'style1';
      }

      // Change CSS
      loadThemeStyles(currentTheme);
  }

  function loadThemeStyles(theme) {
      const styleLink = document.getElementById('theme-style');
      styleLink.href = themeStyles[theme];
  }
});



document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelector('.keys');
    const inputDisplay = document.querySelector('.input');
    const outputDisplay = document.querySelector('.output');
    const screen = document.querySelector('.screen');

    let currentInput = '';
    let expression = '';
    let lastActionWasCalculation = false;

    keys.addEventListener('click', event => {
        const { target } = event;
        const { key } = target.dataset;

        if (!target.matches('button')) {
            return;
        }

        switch (key) {
            case '+':
            case '-':
            case '*':
            case '/':
                appendOperator(key);
                break;
            case '=':
                calculate();
                break;
            case 'delete':
                deleteLast();
                break;
            case 'reset':
                resetCalculator();
                break;
            default:
                appendNumber(key);
        }
    });

    function appendNumber(number) {
        if (lastActionWasCalculation) {
            expression = '';
            outputDisplay.textContent = '';
            lastActionWasCalculation = false;
        }
        if (currentInput.includes('.') && number === '.') return;
        currentInput = currentInput.toString() + number.toString();
        updateDisplay();
    }

    function appendOperator(op) {
        if (currentInput === '' && expression === '') return;
        if (currentInput === '' && expression !== '') {
            expression = expression.slice(0, -1) + op;
        } else {
            expression += currentInput + op;
            currentInput = '';
        }
        lastActionWasCalculation = false;
        updateDisplay();
    }

    function calculate() {
        if (currentInput === '' && expression === '') return;
        expression += currentInput;
        try {
            const result = Function('return ' + expression)(); // Using Function constructor instead of eval
            outputDisplay.textContent = result;
            expression = result.toString();
            currentInput = '';
        } catch (error) {
            outputDisplay.textContent = 'Error';
            expression = '';
            currentInput = '';
        }
        lastActionWasCalculation = true;
        updateDisplay(true);
    }

    function deleteLast() {
        if (currentInput !== '') {
            currentInput = currentInput.slice(0, -1);
        } else if (expression !== '') {
            expression = expression.slice(0, -1);
        }
        updateDisplay();
    }

    function resetCalculator() {
        currentInput = '';
        expression = '';
        outputDisplay.textContent = '';
        updateDisplay();
    }

    function updateDisplay(resultShown = false) {
        if (resultShown) {
            inputDisplay.textContent = '';
        } else {
            inputDisplay.textContent = expression + currentInput;
        }
        resetScreen();
    }
});







