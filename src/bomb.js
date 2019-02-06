import React, { Component } from 'react';
import logo from './logo.svg';

class Bomb extends Component {
  
  state= {
    count: 0
  }

    componentDidMount() {
  this.interval = setInterval(() => {
    this.setState({
        count : this.state.count + 1
    })
  }, 1000)
}
    componentWillUnmount() {
        if (this.state.count > 8) {
    clearInterval(this.interval)
        }
  }

  render() {
    return (
      <div>
        {this.state.count % 2 === 0 && <p>tick</p>}
        {this.state.count % 2 !== 0 && <p>tock</p>}
        {this.state.count % 8 === 0 && <p show>BOOM!!!!</p>}
        {this.state.count > 8 && <p hidden>BOOM!!!!</p>}

      </div>
    );
  }
}

export default Bomb;
