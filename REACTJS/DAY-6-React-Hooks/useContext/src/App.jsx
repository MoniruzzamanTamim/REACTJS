import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './component/ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        This is a useContext Hooks , Work With Global Child Component
      </div>
      <br /><br />

            <ParentComponent/>
      
    </>
  )
}

export default App
