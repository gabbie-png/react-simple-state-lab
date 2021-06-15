import React, { Component } from 'react';
export default class Cell extends React.Component{
    constructor(props) {
        super()
        this.state = {color: props.value} // ...define initial state with a key of 'color' set to the 'value' prop
      } 
      //handle click does the same thing as a callback function in an event listener it handles the event in this case is the click
      handleClick = () => {
          this.setState({color: "#333"})
      }
    render(){
        return <div onClick = {this.handleClick} className='cell' style={{backgroundColor: this.state.color}}></div>
    }
}

//Cell.addEventListener('click',this.setState())