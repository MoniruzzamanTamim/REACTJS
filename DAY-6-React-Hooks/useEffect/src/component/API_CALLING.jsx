
import React, {useState, useEffect} from 'react';




const APICALLING = () => {


const [apiVallue, setApiVallue] = useState()
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState()
const [ finalMessage, setFinalMessage] = useState()

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    if(!res.ok) {
        throw Error(`Your API not Connect, ${res.status} Error Running`);
       
    }else{
        return res.json();
    }
})
.then((data)=>{
    setApiVallue(data);
    setIsLoading(false)
})
.catch((error)=>{
  
    setError(error.message);
    setIsLoading(false)
})

.finally(()=>{
    setFinalMessage("Hello")
})
    
})



    return (
        <div>

       {isLoading && <p>Page Loading.......</p>}
       {apiVallue && apiVallue.map((todo)=>{
            return  <div key={todo.id} style={{textAlign: "left", border: "1px solid red", margin: "10px 0"}}> 
                <span>{todo.id}</span>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                
                 </div>
       })}
    {error && <p>{error}</p>}
      {finalMessage && <p>Thank Your For Broweser ME</p>}
    
        </div>
    );
};

export default APICALLING;