import React, { useState } from 'react';


const counter = () => {

    const [count, setCount]= useState(5)
    const increment = ()=>{
        setCount( (count)=> count +1 )
    }

    const decrement = ()=>{
        setCount( (count)=> count -1 )
    }

    const resetBtn = ()=>{
        setCount( (count)=> count = 5 )
    }


           
    return (
        <div className='CountME'>
        
            <h2>Number: {count}</h2>
            <button className='incrementBtn' onClick={increment}  disabled={count == 10? true : false }>+</button>
            <button className='decrementBtn' onClick={decrement}  disabled={count ==0? true : false }>-</button>
            <button className='ResettBtn' onClick={resetBtn} disabled={count ==5? true : false }>0</button>
            
        </div>
    );
};

export default counter;