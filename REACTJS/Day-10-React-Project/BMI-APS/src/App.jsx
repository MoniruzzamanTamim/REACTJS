import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BmiApss from './Component/BmiApss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BmiApss/>
    </>
  )
}

export default App
