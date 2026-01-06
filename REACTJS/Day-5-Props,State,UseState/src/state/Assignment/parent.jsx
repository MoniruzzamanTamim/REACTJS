import React, { Component } from 'react'

export default class parent extends Component {
state = { count: 0 };
  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };
  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment} disabled={this.state.count ===10 ? true: false}>+</button>
        <button onClick={this.decrement} disabled={this.state.count ===0 ? true: false}>-</button>
      </div>
    );
  }

}
