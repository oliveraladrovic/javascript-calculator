import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';

class App extends Component {
  state = {
    numberOnScreen: '0',
    newNumber: true,
    decimal: false,
    previousNumber: 0,
    operator: '',
    showOperator: ''
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
        this.calculate('');
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
    const { newNumber } = this.state;
    if (newNumber) {
      this.setState({
        numberOnScreen: '0',
        newNumber: true,
        decimal: false,
        previousNumber: 0,
        operator: '',
        showOperator: ''
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
    const { numberOnScreen, newNumber } = this.state;
    if (newNumber) {
      this.setState({
        numberOnScreen: digit,
        newNumber: digit === '0' ? true : false,
        showOperator: ''
      });
    } else {
      if (numberOnScreen.length < 14) {
        this.setState({
          numberOnScreen: this.formatForScreen(numberOnScreen + digit)
        });
      }
    }
  };

  decimal = () => {
    const { numberOnScreen, newNumber, decimal } = this.state;
    if (!decimal) {
      this.setState({
        numberOnScreen: newNumber ? '0,' : numberOnScreen + ',',
        newNumber: false,
        decimal: true,
        showOperator: ''
      });
    }
  };

  calculate = operation => {
    const {
      numberOnScreen,
      previousNumber,
      operator,
      showOperator
    } = this.state;
    // Ako sam se predomislio i stisnuo neku drugu operaciju
    if (showOperator !== '') {
      this.setState({
        operator: operation,
        showOperator: operation
      });
      return;
    }
    if (numberOnScreen === 'Infinity' || numberOnScreen === 'NaN') {
      return;
    }
    // Ako operator već postoji samim time postoji i prethodni broj, onda treba izračunati
    // i postaviti nove vrijednosti, inače samo postaviti nove vrijednosti
    let number = this.parse(numberOnScreen);
    if (operator !== '') {
      let result;
      switch (operator) {
        case '+':
          result = previousNumber + number;
          break;
        case '-':
          result = previousNumber - number;
          break;
        case '×':
          result = previousNumber * number;
          break;
        case '/':
          result = previousNumber / number;
          break;
        default:
          break;
      }
      // Rezultat može biti negativan, ogroman, puno decimala, Infinity, NaN...
      // provjeriti, formatirati, prikazati
      let stringResult = result.toString();
      if (result === Infinity || isNaN(result)) {
        result = 0;
        // Ako je rezultat u exponential obliku i veći od 14 znakova
      } else if (stringResult.indexOf('e') >= 0 && stringResult.length > 14) {
        stringResult = this.trimExponential(result);
        stringResult = stringResult.replace('.', ',');
      } else if (stringResult.length > 14 && stringResult.indexOf('e') < 0) {
        // Ako rezultat NIJE u eksponencijalnom obliku ali je veći od 14 znakova
        // Provjeriti dali je to cijeli broj ili je decimalni sa velikim cijelim dijelom
        if (stringResult.indexOf('.') < 0 || stringResult.indexOf('.') > 13) {
          result = result.toExponential();
          stringResult = this.trimExponential(result);
          stringResult = stringResult.replace('.', ',');
          // Decimalni je broj sa previše decimala
        } else {
          stringResult = stringResult.slice(0, 14);
        }
      } else if (false) {
        // Ovdje dodati druge situacije ako postoji koja
      } else {
        stringResult = this.formatForScreen(stringResult.replace('.', ','));
      }
      this.setState({
        numberOnScreen: stringResult,
        newNumber: true,
        decimal: false,
        previousNumber: result,
        operator: operation,
        showOperator: operation
      });
    } else {
      this.setState({
        numberOnScreen: this.formatForScreen(
          number.toString().replace('.', ',')
        ),
        newNumber: true,
        decimal: false,
        previousNumber: number,
        operator: operation,
        showOperator: operation
      });
    }
  };

  trimExponential = result => {
    let stringResult = result.toString();
    if (stringResult.length > 14) {
      let nonExpPart = stringResult.slice(0, stringResult.indexOf('e'));
      let expPart = stringResult.slice(
        stringResult.indexOf('e'),
        stringResult.length
      );
      nonExpPart = nonExpPart.slice(0, 14 - expPart.length - 2);
      nonExpPart = parseFloat(nonExpPart);
      stringResult = nonExpPart.toString() + expPart;
    }
    return stringResult;
  };

  parse = numberString => {
    numberString = numberString.replace(/\./g, '').replace(',', '.');
    return parseFloat(numberString);
  };

  formatForScreen = currentNumber => {
    let sign, intPart, decPart;
    sign = currentNumber.slice(0, 1) === '-' ? '-' : '';
    if (currentNumber.indexOf(',') >= 0) {
      intPart = currentNumber.slice(sign.length, currentNumber.indexOf(','));
      decPart = currentNumber.slice(
        currentNumber.indexOf(','),
        currentNumber.length
      );
    } else {
      intPart = currentNumber.slice(sign.length, currentNumber.length);
      decPart = '';
    }
    intPart = intPart.replace(/\./g, '');
    let formattedNumber = '';
    while (intPart.length > 3) {
      formattedNumber =
        '.' + intPart.slice(intPart.length - 3) + formattedNumber;
      intPart = intPart.slice(0, intPart.length - 3);
    }
    formattedNumber = sign + intPart + formattedNumber + decPart;
    return formattedNumber;
  };

  render() {
    return (
      <div className='App'>
        <Display
          number={this.state.numberOnScreen}
          operator={this.state.showOperator}
        />
        <Buttons pressedButton={this.pressedButton} />
      </div>
    );
  }
}

export default App;
