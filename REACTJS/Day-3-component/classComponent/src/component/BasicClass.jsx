import React, { Component } from 'react';

 class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
           count : 0,
           countTwo :10
        }
       
      }
     

    render(){

        const vallueChange =(e)=>{
            this.setState({
                countTwo : this.state.countTwo + 1
                })   
        }

        
        const valluhandle =(e)=>{
            this.setState({
                count : this.state.count + 1
                })   
        }


       
        return (
            <>
            <h5>This IS Basic Class Component</h5>
            <h5>{this.state.countTwo}</h5>
            <button onClick={vallueChange}>Click </button>
            <h5 onClick={valluhandle}>{this.state.count}</h5>
            
            </>
        );
}
}




export default ClassComponent;