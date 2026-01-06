import React, { useState } from 'react';


const BasicuseState = () => {

    const [count, setCount]= useState(0)
    const increment = ()=>{
        setCount(count +1 )
    }

    const decrement = ()=>{
        setCount( count - 1 )
    }

    


           
    return (
        <div>
        
            <h2>Number: {count}</h2>
            <button className='incrementBtn' onClick={increment}  disabled={count == 10? true : false }>+</button>
            <button className='decrementBtn' onClick={decrement}  disabled={count ==0? true : false }>-</button>
            
        </div>
    );
};

export default BasicuseState;