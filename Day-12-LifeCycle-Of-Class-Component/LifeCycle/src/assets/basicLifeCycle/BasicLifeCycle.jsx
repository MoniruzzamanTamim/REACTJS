import React, { Component } from 'react';
import { Fragment } from 'react';

// Working Process of LifeCycle

// Mounting = Constructor ==> Render ==> componentDidMount
//Updating = ShouldWillUpdate ==> Render ==> componentDidUpdate
// UnMounting = componentWillUnmount  

 class BasicLifeCle extends Component {

    // Mounting
    constructor(props) {
        super(props)
        console.log("Calling ConsTructor");
        this.state = {
           count : 0,
           countTwo :10
        }
       
      }

      componentDidMount(){
        console.log("ComponentDidMount");
      }
    
    //   Updating

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    handleIncrement = () => {
        this.setState({
          count: this.state.count + 1,
        });
      };

       

    render(){
      {  console.log("Rendaring");}
        return (
           <div>
            <h5>Basic LifeCycle</h5>
            <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
             </div>
        );
}
}



export default BasicLifeCle;