import React from 'react';

const Buttons = ({ pressedButton }) => {
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
