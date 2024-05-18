import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import State from './Component/state'
import UseState from './Component/useState'
import Props from './Component/props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Props count='tamim' />
     <State/>
     <UseState/>
    </>
  )
}

export default App
