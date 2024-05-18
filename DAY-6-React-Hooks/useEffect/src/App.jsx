import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BASICUSEEFFECT from './component/basic-useEffect'
import APICALLING from  './component/API_CALLING'
import CustomApi from './component/custom-hooks/customapi' 
import SecondAPI from './component/custom-hooks/secondApi' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is UseEffect Hooks</h1>
      <BASICUSEEFFECT/>
      <APICALLING/>
      <h1>Custom Hooks </h1>
      <CustomApi/>
      <h1>Second API</h1>
      <SecondAPI />

    </>
  )
}

export default App
