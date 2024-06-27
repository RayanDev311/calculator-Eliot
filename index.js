const keys = document.querySelectorAll('.number')
const screen_input = document.querySelector('.screen .input')
const screen_output = document.querySelector('.screen .output')

let input = "";

for (let number of keys) {
    const value = number.dataset.key;

    number.addEventListener('click', () => {
        if (value == "clear") {
            input = "";
            screen_input.innerHTML = "";
            screen_output.innerHTML = "";
        } else if (value == "del") {
            input = input.slice(0, -1);
            screen_input.innerHTML = input;
        } else if (value == "=") {
            function add(a, b) {
                return a + b;
              }
              function sub(a, b) {
                return a - b;
              }
              function mul(a, b) {
                return a * b;
              }
              function div(a, b) {
                return a / b;
              }
              function calculate(expression) {
                let result = 0;
                let currentNumber = 0;
                let operator = '';
                for (let i = 0; i < expression.length; i++) {
                  if (isNaN(expression[i])) {
                    if (operator === '') {
                      operator = expression[i];
                    } else {
                      switch (operator) {
                        case '+':
                          result = add(currentNumber, parseInt(expression[i]));
                          break;
                        case '-':
                          result = sub(currentNumber, parseInt(expression[i]));
                          break;
                        case '*':
                          result = mul(currentNumber, parseInt(expression[i]));
                          break;
                        case '/':
                          result = div(currentNumber, parseInt(expression[i]));
                          break;
                      }
                      currentNumber = result;
                      operator = '';
                    }
                  } else {
                    currentNumber = currentNumber  10 + parseInt(expression[i]);
                  }
                }
              
                return result;
              }
        }
    })
}

console.log('keys');