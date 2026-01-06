import React, { Component } from 'react'
import Child from './Child'
export class ClassComponent extends Component {
  state = {
    data: {
      name: "Tamim",
      email: "tamimiqbal896@gmail.com",
      address: "Dhaka-1205"
    },
    users: [
      { id: 1, name: "Ali", email: "ali@gmail.com" },
      { id: 2, name: "Sara", email: "sara@gmail.com" },
      { id: 3, name: "Rahim", email: "rahim@gmail.com" }
    ]
  };

  showAlert = (name) => {
    alert(`Hello ${name}!`);
  };
  render() {
 
    return (
      <div>
        <Child name="This is a ClassCompont  Props" data={this.state.data} showAlert={this.showAlert} users={this.state.users}/>
      </div>
    )
  }
}

export default ClassComponent