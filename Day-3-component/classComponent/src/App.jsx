import { useState } from 'react'
import './App.css'
import BasicClass from './component/BasicClass';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BasicClass/>
     
    </>
  )
}

export default App
