import React from 'react';
import Board from './public/Board'
class App extends React.Component {
    //shifting history from board ato game
    constructor(props) {
        super(props); //passing it to the parent class
        //track x and y if x have moved then x should not be allowed again
        this.state = {
            //to handle every move
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ], //fill 9 arrays with null value each cubes will pass array index and values will be changes,
            xIsNext: true,
            stepNumber: 0,
            Winner: null
        };
    }

    changeValue = (i) => {
        const {xIsNext} = this.state
        // const square = this.state.squares
       
        const history = this
            .state
            .history
            .slice(0, this.state.stepNumber + 1);
        //0 to stepnumber + 1
        const Current = history[history.length - 1]; 
        const squares = Current
            .squares
            .slice();
        if (this.state.Winner || squares[i] != null) {
            return;
        }

        squares[i] = xIsNext
            ? 'X'
            : 'O';

        //send it to Game
        const result = calculateWinner(squares);
        this.setState({
            history: history.concat({squares: squares}),
            xIsNext: !xIsNext,
            Winner: result,
            stepNumber: history.length
        })      
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0, //will set true or false if 0 true else false
        });
    }
    reset = ()=>{
    this.setState({
        //to handle every move
        history: [
            {
                squares: Array(9).fill(null)
            }
        ], //fill 9 arrays with null value each cubes will pass array index and values will be changes,
        xIsNext: true,
        stepNumber: 0,
        Winner: null
    })
    }
    render() {
        const history = this.state.history; //this will go on increasing
        const Current = history[this.state.stepNumber] //value will be latest of the history will have step count instaed if length based
        //on step
        //for current and switch.
        const moves = history.map((step, move) => {
          //move is the index
            const desc = move
                ? 'Go to move #' + move
                : 'Go to game start';
            
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        return (
            <div className="game">
                <div className="status">Winner is: {this.state.Winner}</div>
                <div className="game-board">
                    <Board square={Current.squares} changeValue={i => this.changeValue(i)}/>
                </div>
                <div className="game-info">
                    <div>Next Player is:{
                             (
                                this.state.xIsNext
                                    ? 'X'
                                    : 'O'
                            )
                        }</div>
                    <ol>{/* TODO */}
                        {moves}
                    </ol>

                    <button onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {

    const lines = [
        [
            0, 1, 2
        ], //this is the index if we pass this index and check if in square in there is all x or o then winner
        [
            3, 4, 5
        ],
        [
            6, 7, 8
        ],
        [
            0, 3, 6
        ],
        [
            1, 4, 7
        ],
        [
            2, 5, 8
        ],
        [
            0, 4, 8
        ],
        [
            2, 4, 6
        ]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {

            return squares[a]

        }

    }
    return null;
}

export default App;
