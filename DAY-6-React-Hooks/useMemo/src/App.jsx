import React, { useState, useCallback, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countone from './component/Countone'
import Counttwo from './component/Counttwo'

function App() {
  const[toggle, setToggle]=useState(false)
  const [count, setCount] = useState(0)
  console.log("App  is Rendaring");

  const receivefunction=  useCallback(()=>{
    setCount((count)=> count + 1)
  }, [count])

  const lopping = useMemo(()=>{
    let i =0;
    while (i < 500000000) i++; 
    return count;
  },[toggle])

  

  return (
    <>

      {lopping}
    {toggle? <button onClick={()=>setToggle(!toggle)}>ON</button> : <button onClick={()=>setToggle(!toggle)}>OFF</button> }
      
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     

      <Countone vallueforcount={count}/>
      <Counttwo receivefunction={receivefunction}/>
    </>
  )
}

export default React.memo(App)
