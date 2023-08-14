document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    let expression = '';
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const buttonText = this.textContent;
        
        if (buttonText === '=') {
          if (expression) {
            result.value = eval(expression);
          }
        } else if (buttonText === 'C') {
          expression = '';
          result.value = '';
        } else {
          expression += buttonText;
          result.value += buttonText;
        }
      });
    });
  });