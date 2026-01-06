import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './component/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Conter App</h1>
      <Counter/>
    </>
  )
}

export default App
