import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Eventbubling from './eventbubling';

function App() {

  // UseState Syntex 
  const [count, setCount] = useState(0)

// Change Multiple Vallue on Previse USestate Vallue
  const increment =()=>{
    setCount((preConunt)=> preConunt +2);
    setCount((preConunt)=> preConunt +4);
    setCount((preConunt)=> preConunt +2);
    
  }

  return (
    <>
    
      <h1>UseState Defoult Vallue IS : {count}</h1>

      <button type="button" onClick={increment}>Increment</button>
      <Eventbubling  />
      
    </>
  )
}

export default App
