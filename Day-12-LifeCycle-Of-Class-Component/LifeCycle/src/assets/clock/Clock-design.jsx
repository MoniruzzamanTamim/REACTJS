import React, { Component } from 'react';


 class componentName extends Component {
 constructor(props){
    super(props);
    this.state ={
        date :new Date()

    }
 }

 componentDidMount(){
    setInterval(() => {
        this.setState({ date :new Date()})
    }, 1000);
 }


    render(){
   var hour = this.state.date.getHours().toLocaleString("bn-BN");
   var minute = this.state.date.getMinutes().toLocaleString("bn-BN");
   var second = this.state.date.getSeconds().toLocaleString("bn-BN");
         
 
        return (
            <div>
                <h1> {` ${hour} : ${minute} : ${second}`} </h1>
            </div>
        );
}
}



export default componentName