import React from 'react';
import Square from './Square'
class Board extends React.Component {

   renderSquare=(i)=>{
        return <Square
            changeValue={() => this.props.changeValue(i)}
            value={this
                .props
                .square[i]}/>;
    }
    render() {
      
//Like we store move in squares we will store state in squares that
//we will store every squares in the history and if user click any of the previous move it will display that square
//we need to decide which component owns the state
        return (    
            <div>
            
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
    }
}
export default Board;
//declaring a winner we have to define all the winning combination

/* To collect data from multiple children, or to have two child components
 * communicate with
each other, you need to declare the shared state in their
 * parent component instead. The parent component can pass the
state back down
 * to the children by using props; this keeps the child components in sync with
 * each other and with the parent component.
 * class that dont have there own state should use functional component
 */