import React, { useReducer } from 'react'

const initialValue = 1;

 const reducer =(state,action)=>{
        switch (action) {
            case "increment":
                return state + 1  
            case "decrement":
                return state - 1  
            default:
                break;
        }
 }
function Basic() {
    const [state, dispatch] = useReducer(reducer,initialValue);
  return (
    <div>
        <h1>{state}</h1>
        <button type="button" onClick={()=> dispatch("increment")}>Increment</button>
        <button type="button" onClick={()=> dispatch("decrement")}>Increment</button>
    </div>
  )
}

export default Basic