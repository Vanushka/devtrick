import React, { Component } from 'react';


const name = 'Ivan';
const element = <h1>Hello, {name}</h1>;

class Messengers extends Component {
  render() {
    return (
      <div className="App">
        {element}
      </div>
    )
  }
}

export default Messengers;
