import React, { Component } from 'react';
import logo from './logo.svg';

class HelloWorld extends Component {
  
  state={
    who: 'world'
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={()=>this.setState({
          who: 'friend!'
        })} >World</button>
        <button onClick={()=>this.setState({
          who: 'React!'
        })} >Friend</button>
        <button onClick={()=>this.setState({
          who: 'world!'
        })} >React</button>
      </div>
    );
  }
}

export default HelloWorld;
