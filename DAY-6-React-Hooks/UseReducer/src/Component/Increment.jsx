import React,{useReducer} from 'react'
const reducer = (state,action)=>{
    if (action.type == "increment") {
        return{
            ...state,
            Count: state.Count + action.value
        }
    }
    if (action.type == "decrement") {
        return{
            ...state,
            Count: state.Count - 1
        }
    }

}


const increment = () => {


  const [incrementState, dispatch]=useReducer(reducer,{
    Count: 0,
  })

  const handleplus=(e)=>{
    e.preventDefault()
    dispatch({type: "increment" , value: 5})
  }
  const handleMinus=(e)=>{
    e.preventDefault()
    dispatch({type: "decrement"})
  }


  return (
    <div>



    <h2>Counter - {incrementState.Count} </h2>
    <button type="submit" onClick={handleplus} disabled={incrementState.Count == 10? true : false}>Increment</button>
    <button type="submit" onClick={handleMinus} disabled={incrementState.Count == 0? true : false}>Increment</button>

    </div>
  )
}

export default increment