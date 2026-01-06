import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicReducer from './Component/BasicReducer'
import Practice from './Component/practise'
import Increment from './Component/Increment'
import ApiCalling from './Component/ApiCalling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicReducer/>
      <Practice/>
      <Increment/>
      <ApiCalling/>
        
    </>
  )
}

export default App
