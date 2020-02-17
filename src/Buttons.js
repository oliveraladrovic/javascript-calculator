import React from 'react';

const Buttons = ({ pressedButton }) => {
  document.documentElement.onkeydown = btnPressed;
  function btnPressed(e) {
    let btn;
    switch (e.key) {
      case 'Delete':
      case 'c':
      case 'C':
        btn = document.getElementById('clear');
        break;
      case '/':
        btn = document.getElementById('divide');
        break;
      case '*':
        btn = document.getElementById('multiply');
        break;
      case '-':
        btn = document.getElementById('subtract');
        break;
      case '7':
        btn = document.getElementById('seven');
        break;
      case '8':
        btn = document.getElementById('eight');
        break;
      case '9':
        btn = document.getElementById('nine');
        break;
      case '+':
        btn = document.getElementById('add');
        break;
      case '4':
        btn = document.getElementById('four');
        break;
      case '5':
        btn = document.getElementById('five');
        break;
      case '6':
        btn = document.getElementById('six');
        break;
      case '1':
        btn = document.getElementById('one');
        break;
      case '2':
        btn = document.getElementById('two');
        break;
      case '3':
        btn = document.getElementById('three');
        break;
      case 'Enter':
      case '=':
        btn = document.getElementById('equals');
        break;
      case '0':
        btn = document.getElementById('zero');
        break;
      case ',':
      case '.':
        btn = document.getElementById('decimal');
        break;
      default:
        break;
    }
    if (btn !== undefined) {
      btn.classList.add('button-pressed');
      btn.click();
      setTimeout(() => {
        btn.classList.remove('button-pressed');
      }, 100);
    }
  }
  return (
    <div id='buttons'>
      <button
        id='clear'
        onClick={() => {
          pressedButton('clear');
        }}
      >
        C
      </button>
      <button
        id='divide'
        onClick={() => {
          pressedButton('divide');
        }}
      >
        /
      </button>
      <button
        id='multiply'
        onClick={() => {
          pressedButton('multiply');
        }}
      >
        ×
      </button>
      <button
        id='subtract'
        onClick={() => {
          pressedButton('subtract');
        }}
      >
        -
      </button>
      <button
        id='seven'
        onClick={() => {
          pressedButton('seven');
        }}
      >
        7
      </button>
      <button
        id='eight'
        onClick={() => {
          pressedButton('eight');
        }}
      >
        8
      </button>
      <button
        id='nine'
        onClick={() => {
          pressedButton('nine');
        }}
      >
        9
      </button>
      <button
        id='add'
        onClick={() => {
          pressedButton('add');
        }}
      >
        +
      </button>
      <button
        id='four'
        onClick={() => {
          pressedButton('four');
        }}
      >
        4
      </button>
      <button
        id='five'
        onClick={() => {
          pressedButton('five');
        }}
      >
        5
      </button>
      <button
        id='six'
        onClick={() => {
          pressedButton('six');
        }}
      >
        6
      </button>
      <button
        id='one'
        onClick={() => {
          pressedButton('one');
        }}
      >
        1
      </button>
      <button
        id='two'
        onClick={() => {
          pressedButton('two');
        }}
      >
        2
      </button>
      <button
        id='three'
        onClick={() => {
          pressedButton('three');
        }}
      >
        3
      </button>
      <button
        id='equals'
        onClick={() => {
          pressedButton('equals');
        }}
      >
        =
      </button>
      <button
        id='zero'
        onClick={() => {
          pressedButton('zero');
        }}
      >
        0
      </button>
      <button
        id='decimal'
        onClick={() => {
          pressedButton('decimal');
        }}
      >
        ,
      </button>
    </div>
  );
};

export default Buttons;
