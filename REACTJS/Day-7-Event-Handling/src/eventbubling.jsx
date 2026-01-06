
import React from 'react';

const eventbubling = () => {

    const parentevent =(e)=>{
          console.log(e);
    }

    const ChildEvent =(e)=>{
           e.stopPropagation();
        console.log(e);
  }

    return (
        <div onClick={parentevent}>  PArent Event 
        <br/>
             <button onClick={ChildEvent}>ChilDEvent </button>
        </div>
    );
};
export default eventbubling;
