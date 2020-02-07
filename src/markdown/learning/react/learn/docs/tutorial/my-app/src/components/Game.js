import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Board } from './Board'

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render () {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winnder: ${winner}`;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (

      <div className="container">
        <Header />
        <div className="main">
          <div className="game-board">
            <div className="game-info">
              <div>{status}</div>
            </div>
            <div className="game-dashboard">
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
              <div className="steps">
                <ol>{moves}</ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current =history[this.state.stepNumber];
    const squares = current.squares.slice();
    const winner = calculateWinner(current.squares);
    if (winner || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }
}

export { Game }