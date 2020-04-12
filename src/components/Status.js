import React from 'react';

function Status(props) {
  // Props
  const { player, result } = props;

  if (!result) return (
    <div className="status">Player {player}'s move</div>
  );

  if (result === 'D') return (
    <div className="status">Draw</div>
  );

  return (
    <div className="status">Player {result} wins</div>
  );
}

export default Status;