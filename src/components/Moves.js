import React from 'react';

function Moves(props) {
  // Props
  const { moves, onSelectMove } = props;
  const current = moves.length - 1;

  return (
    <select className="moves" onChange={(event) => onSelectMove(+event.target.value)} value={current}>
      {moves && moves.map((value, index) => (
          <option key={index} value={index}>{index ? `Move #${index}` : 'Start Over'}</option>
      ))}
    </select>
  );
}

export default Moves;