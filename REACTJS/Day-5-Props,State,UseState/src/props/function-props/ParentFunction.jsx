import React,{useState} from 'react'
import Child from './Child'



function Parent() {

  const [message,setMessage] = useState("Hello");
  const changeMessage  = (name)=> {
    setMessage(`Hello, I am Come From ${name}`)
}
  return (
    <div style={{marginTop:"40px"}}>
      {message}
      <Child changeMessage= {changeMessage}/>

    </div>
  )
}

export default Parent