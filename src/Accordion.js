import React, { Component } from 'react';
import logo from './logo.svg';

class Accordion extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  static defaultProps = {
    sections: [
      {
        title: 'Section 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Section 2',
        content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
      },
      {
        title: 'Section 3',
        content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      },
    ]
  }

  renderLi() {
    console.log('render li is running');
    return this.props.sections.map((i, j) => 
    <li key={j}>
     <button key={j} onClick={this.handleClick}>{i.title}</button>
    </li>)
  }
  
  handleClick = () => {
    
  }

  componentWillUnmount() { }

  render() {
    return (
      <ul>
        {this.renderLi()}
      </ul>
    );
  }
}


export default Accordion;
