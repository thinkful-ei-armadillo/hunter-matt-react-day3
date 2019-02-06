import React, { Component } from 'react';
import logo from './logo.svg';

class RouletteGun extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      chamber: null,
      spinningTheChamber: false
    }
  }

  static defaultProps={
    bulletInChamber: 8
  }

  handleClick = () =>{
    this.setState({
      spinningTheChamber: true
    })
    console.log('click')
      let timeout = setTimeout(()=>{
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber:false
      })
    }, 2000)
    clearTimeout(this.timeout)
  }

  componentWillUnmount() {
  clearTimeout(this.timeout)
}

  render() {
    return (
      <div>
        <p>spinning the chamber and pulling the trigger! ...</p>
        {/* {this.state.chamber !== null && <p hidden>you're safe!</p>} */}
        {this.state.chamber !== this.props.bulletInChamber ? this.state.chamber ?<p>you're safe!</p>: '':<p>BANG!!!!</p>}
        
        <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    );
  }
}

export default RouletteGun;
