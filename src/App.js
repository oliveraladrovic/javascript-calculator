import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';

class App extends Component {
  state = {
    numberOnScreen: '0',
    newNumber: true,
    decimal: false,
    previousNumber: 0,
    operator: ''
  };
  pressedButton = button => {
    switch (button) {
      case 'clear':
        this.clear();
        break;
      case 'divide':
        this.calculate('/');
        break;
      case 'multiply':
        this.calculate('×');
        break;
      case 'subtract':
        this.calculate('-');
        break;
      case 'seven':
        this.addDigit('7');
        break;
      case 'eight':
        this.addDigit('8');
        break;
      case 'nine':
        this.addDigit('9');
        break;
      case 'add':
        this.calculate('+');
        break;
      case 'four':
        this.addDigit('4');
        break;
      case 'five':
        this.addDigit('5');
        break;
      case 'six':
        this.addDigit('6');
        break;
      case 'one':
        this.addDigit('1');
        break;
      case 'two':
        this.addDigit('2');
        break;
      case 'three':
        this.addDigit('3');
        break;
      case 'equals':
        break;
      case 'zero':
        this.addDigit('0');
        break;
      case 'decimal':
        this.decimal();
        break;
      default:
        break;
    }
  };

  clear = () => {
    if (this.state.newNumber) {
      this.setState({
        numberOnScreen: '0',
        newNumber: true,
        decimal: false,
        previousNumber: 0,
        operator: ''
      });
    } else {
      this.setState({
        numberOnScreen: '0',
        newNumber: true,
        decimal: false
      });
    }
  };

  addDigit = digit => {
    if (this.state.numberOnScreen.length < 14) {
      if (this.state.newNumber) {
        this.setState({
          numberOnScreen: digit,
          newNumber: false
        });
      } else {
        this.setState({
          numberOnScreen: this.formatForScreen(
            this.state.numberOnScreen + digit
          )
        });
      }
    }
  };

  decimal = () => {
    if (!this.state.decimal) {
      this.setState({
        numberOnScreen: this.state.numberOnScreen + ',',
        newNumber: false,
        decimal: true
      });
    }
  };

  calculate = operator => {
    if (this.state.newNumber) {
      this.setState({
        operator: operator
      });
    } else {
      let parsedNumber = this.parse(this.state.numberOnScreen);
      let previousNumber = 0;
      if (this.state.operator === '') {
        previousNumber = parsedNumber;
      } else {
        switch (this.state.operator) {
          case '+':
            previousNumber = this.state.previousNumber + parsedNumber;
            break;
          case '-':
            previousNumber = this.state.previousNumber - parsedNumber;
            break;
          case '×':
            previousNumber = this.state.previousNumber * parsedNumber;
            break;
          case '/':
            previousNumber = this.state.previousNumber / parsedNumber;
            break;
          default:
            break;
        }
      }
      this.setState({
        numberOnScreen: this.formatForScreen(previousNumber.toString()),
        newNumber: true,
        decimal: false,
        previousNumber: previousNumber,
        operator: operator
      });
    }
  };

  parse = numberString => {
    numberString = numberString.replace(/\./g, '').replace(',', '.');
    return parseFloat(numberString);
  };

  formatForScreen = currentNumber => {
    let integer = this.state.decimal
      ? currentNumber.slice(0, currentNumber.indexOf(','))
      : currentNumber;
    integer = integer.replace(/\./g, '');
    let formattedNumber = '';
    while (integer.length > 3) {
      formattedNumber =
        '.' + integer.slice(integer.length - 3) + formattedNumber;
      integer = integer.slice(0, integer.length - 3);
    }
    formattedNumber = integer + formattedNumber;
    if (this.state.decimal) {
      formattedNumber += currentNumber.slice(
        currentNumber.indexOf(','),
        currentNumber.length
      );
    }
    return formattedNumber;
  };

  render() {
    return (
      <div className='App'>
        <Display
          number={this.state.numberOnScreen}
          operator={this.state.operator}
        />
        <Buttons pressedButton={this.pressedButton} />
      </div>
    );
  }
}

export default App;
