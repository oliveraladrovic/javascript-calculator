import React from 'react';

const Display = ({ number, operator }) => {
  return (
    <div id='display'>
      <div id='number'>{number}</div>
      <div id='operator'>{operator}</div>
    </div>
  );
};

export default Display;
