import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from "./component/countries"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Country APP Create BY TAMIM</h1>
      
      <Countries/>
    </>
  )
}

export default App
