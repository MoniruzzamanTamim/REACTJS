import React, { Component } from 'react';

export default class Child extends Component {
  render() {
    const { name, data, showAlert } = this.props;

    return (
      <div>
        <h4>Child Component</h4>
        <h2>{name}</h2>

        <h3>Object Data:</h3>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Address: {data.address}</p>

        {/* Button calls Parent function */}
        <button onClick={() => showAlert(name)}>Say Hello</button>

        <h3>Users Array:</h3>
       {this.props.users && this.props.users.map((user, i) => (
  <div key={i}>
    <h4>ID: {user.id}</h4>
    <h4>Name: {user.name}</h4>
    <h4>Email: {user.email}</h4>
  </div>
))}

      </div>
    );
  }
}
