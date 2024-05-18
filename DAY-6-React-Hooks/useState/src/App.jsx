import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicuseState from "./component/basic-useState";
import UpdatePrevallue from "./component/updatePrevallue";
import FormControl from "./component/form-control";
import UsestateObj from "./component/useObject";
import Toggle from './component/Toggle'
import Home from "./todoApp/home";





function App() {
  const [count, setCount] = useState(0)


 

  return (
    <>
      <h1>Basic State</h1>
      <BasicuseState/>
      <br/>
      <h1> update useState based ON Previus Vallue :   </h1>
      <UpdatePrevallue/>
      <h1>form-Control</h1>
      <FormControl/>

      <h1>form-Control Using Obje useState</h1>
      <UsestateObj/>
      <h1>Child to Parent Data Passing Props</h1>
     
      <br/>
      <br/>
      <br/>
      <br/>
       

       <h1>TODOS APPS BUILD </h1>
       <Home />

       <br/>
      <br/>
      <br/>
      <br/>

      <h1>Toggle Using UseState</h1>
       <Toggle/>

    </>
   
  )
}

export default App
