import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';

class App extends Component {
  state = {
    numberOnScreen: '0',
    newNumber: true,
    decimal: false,
    previousNumber: null
  };
  pressedButton = button => {
    switch (button) {
      case 'clear':
        this.clear();
        break;
      case 'divide':
        this.setState({ nextOperator: '/' });
        break;
      case 'multiply':
        this.setState({ nextOperator: '×' });
        break;
      case 'subtract':
        this.setState({ nextOperator: '-' });
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
        this.setState({ nextOperator: '+' });
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
    this.setState({
      numberOnScreen: '0',
      newNumber: true,
      decimal: false
    });
  };

  addDigit = digit => {
    if (this.state.numberOnScreen.length < 14) {
      if (this.state.newNumber) {
        if (digit !== '0') {
          this.setState({
            numberOnScreen: digit,
            newNumber: false
          });
        }
      } else {
        this.setState({
          numberOnScreen: this.formatForScreen(digit)
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

  formatForScreen = digit => {
    let currentNumber = this.state.numberOnScreen + digit;
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
          nextOperator={this.state.nextOperator}
        />
        <Buttons pressedButton={this.pressedButton} />
      </div>
    );
  }
}

export default App;
