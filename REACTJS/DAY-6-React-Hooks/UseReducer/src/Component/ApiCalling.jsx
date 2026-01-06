import React,{useEffect,useReducer} from 'react'

const reducer=(state,action)=>{
      switch (action.type) {
        case "SUCCESS":
            return{
                ...state,
                
                 ApiVallue: action.payLoad,
                 Isloading: false,
                 Error: '',
                 FinalText: "Thank You For Watching ME"
            }
            
            case "FIELD":
                return{
                    ...state,
                    
                     ApiVallue: '',
                     Error: "ERROR : Your API NOT CONNECTED",
                     Isloading: false,
                     FinalText: ''
                }
      
        default:
            break;
      }
}


const ApiCalling = () => {
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
        if (!res.ok) {
            throw Error(`Your API not Connect, ${res.status} Error Running`);
        }else{
            return res.json();
        }
     })
     .then((data)=>{
        dispatch({ type: "SUCCESS", payLoad: data});
     })
     .then(
        dispatch({type: "FIELD", })
     )
    },[])

    const [APIcallingState, dispatch]= useReducer(reducer,{
        Isloading: true,
        ApiVallue: '',
        Error: '',
        FinalText: ''
    })

  return (
    <div>
        {APIcallingState.Isloading && <p>Page IS Loading....</p>}
        {APIcallingState.ApiVallue && APIcallingState.ApiVallue.map((todo)=>{
            return  <div key={todo.id} style={{textAlign: "left", border: "1px solid red", margin: "10px 0"}}>
                <span>{todo.id}</span>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
               
                 </div>
       })}
       {APIcallingState.Error && APIcallingState.Error  }
       {APIcallingState.FinalText && APIcallingState.FinalText}

       <br /><br /><br />

    </div>
  )
}

export default ApiCalling