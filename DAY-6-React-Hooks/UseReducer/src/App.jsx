import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicReducer from './Component/BasicReducer'
import Practice from './Component/practise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicReducer/>
      <Practice/>
        
    </>
  )
}

export default App
