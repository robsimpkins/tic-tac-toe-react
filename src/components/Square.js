import React from 'react';

function Square(props) {
  // Props
  const { onSelect, value } = props;
  
  return (
    <button className="square" onClick={() => onSelect()}>{value}</button>
  );
}

export default Square;