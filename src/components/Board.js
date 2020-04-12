import React from 'react';
import Square from './Square';

function Board(props) {
  // Props
  const { onSelectSquare, resultClass, squares } = props;

  return (
    <div className={"board " + resultClass}>
      {squares.map((value, index) => (
        <Square key={index} value={value} onSelect={() => onSelectSquare(index)} />
      ))}
    </div>
  );
}

export default Board;