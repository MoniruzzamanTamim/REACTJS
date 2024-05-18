import React, { Component } from 'react';

class state extends Component {

    constructor(props) {
        super(props)
        this.state = {
           count : 0,
           countTwo :10
        }
      }                       
  

      incrementEvent =()=>{
        this.setState({

            countTwo : this.state.countTwo +10
        })
      }

    decrementEvent =()=>{
        this.setState({

            countTwo : this.state.countTwo - 10
        })
      }
      changeValue =()=>{
        this.setState({

            countTwo : this.state.countTwo = "HEllo World"
        })
      }


    render() {


        return (
            <div>
                  <h1>This is State </h1>
                   <h1>{this.state.countTwo}</h1>
                   <button className='incrementBtn' onClick={this.incrementEvent} disabled={this.state.countTwo === 100 ? true : false}>+</button>
                   <button className='decrementBtn' onClick={this.decrementEvent} disabled={this.state.countTwo === 0 ? true : false}>-</button>
                   <button type="button" onClick={this.changeValue}>Change Vallue</button>

            </div>
        );
    }
}

export default state;