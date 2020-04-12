import React, { useState } from 'react';
import { PLAYER } from '../constants';
import Board from './Board';
import Moves from './Moves';
import Status from './Status';

function Game() {
  // State
  const [state, setState] = useState(getInitialState());

  function getInitialState() {
    const squares = Array(9).fill(null);
    const player = PLAYER.O;
    const result = null;

    return { squares, player, result, moves: [{ squares, player }] };
  }

  function getNextPlayer() {
    return state.player === PLAYER.O ? PLAYER.X : PLAYER.O;
  }

  function getResult(squares) {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of combinations) {
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.filter((value) => value).length === 9) {
      return 'D';
    }

    return null;
  }

  function onSelectSquare(index) {
    if (state.squares[index] || state.result) {
      return;
    }

    const squares = state.squares.map((value, i) => i === index ? state.player : value);
    const player = getNextPlayer();
    const result = getResult(squares);

    setState({ ...state, squares, player, result, moves: [...state.moves, { squares, player }] });
  }

  function onSelectMove(index) {
    const { squares, player } = state.moves[index];
    const moves = state.moves.slice(0, index + 1);
    const result = null;

    setState({ ...state, squares, player, result, moves });
  }

  return (
    <>
      <Status player={state.player} result={state.result} />
      <Board squares={state.squares} onSelectSquare={onSelectSquare} />
      <Moves moves={state.moves} onSelectMove={onSelectMove} />
    </>
  );
}

export default Game;