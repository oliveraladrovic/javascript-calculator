import React from 'react';

const Display = ({ number, nextOperator }) => {
  return (
    <div id='display'>
      <div id='number'>{number}</div>
      <div id='operator'>{nextOperator}</div>
    </div>
  );
};

export default Display;
