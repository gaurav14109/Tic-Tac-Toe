import React from 'react';
function Square(props) {
    return (
      <button className="square" onClick={props.changeValue} style={{padding:'20px'}}>
        {props.value}
      </button>
    );
  }
export default Square;
    // this.functionname we can use this as we assign function to onclick If we have
    // to use props then we ()=>{} else use this.functionname this.functionname() we
    // call a funtion that perform task and props is available to function every
    // time use this.functionname when assigning a function always keep value in
    // parent state or main state in parent state