import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicRef from './Component/BasicRef'
import Parent from './Component/foewardRef/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BasicRef/>
      <Parent/>
    </>
  )
}

export default App
