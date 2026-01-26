import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Component/Parent'
import TodoApp from './Todos/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Parent></Parent>


        <TodoApp/>
    </>
  )
}

export default App
