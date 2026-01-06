import React, { useState } from 'react'

function Parent() {

    const [count,setCount]=useState(0);
    const valluUpdate=()=>{
        setCount(count+1);
    }
    const updateCount=()=>{
        setCount(count-1);
    }
    const resetValue=()=>{
        setCount(0);
    }
  return (
    <>
    <h1>Increment & Decrement Use useState</h1>
    <h3>{count}</h3>
    <button type="button" onClick={valluUpdate} disabled={count===10 ? true:false}>Increment(+)</button>
    <button type="button" onClick={resetValue} disabled={count===0 ? true:false}>Reset(0)</button>
    <button type="button" onClick={updateCount} disabled={count===0 ? true:false}>Decrement(-)</button>
    

    </>
  )
}

export default Parent