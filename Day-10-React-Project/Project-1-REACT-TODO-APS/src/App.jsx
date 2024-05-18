import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './todoComponent/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>REACT TODO APP</h1> <br/>
    <Home />
    </>
  )
}

export default App
