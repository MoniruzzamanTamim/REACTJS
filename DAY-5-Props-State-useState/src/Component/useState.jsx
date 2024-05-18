import React,{useState} from 'react';





const UseStateHooks = () => {

    const [count, setCount] = useState(0)

    const valluUpdate = ()=>{
        setCount(count + 1)
    }
    const valluedowngrade = ()=>{
        setCount(count -1 )
    }
    const textvalle = ()=>{
        setCount(count =  "Hello This is UseState")
    }
    return (
        <div>
           <h1>This is useState </h1>
            <h3>Count: {count}</h3>
            <button onClick={valluUpdate}>+</button>
            <button onClick={valluedowngrade}>-</button>
            <button onClick={textvalle}>Text </button>
        </div>
    );
};

export default UseStateHooks;