import React,{useReducer} from 'react'

function ReducerFunction (state,action){
    switch (action.type) {
        case 'increment':
           return {
                count: state.count + action.value
            };
    
        default:
            break;
    }
}


function ReducerWithObj() {
    const [state, dispatch] = useReducer(ReducerFunction, {
        count:1
    })
  return (
   <>
    <div>ReducerWithObj</div>
    <span>{state.count}</span>

    <button type='button' onClick={()=> dispatch({type:'increment', value:10})}>Incremet </button>
   </>
  )
}

export default ReducerWithObj