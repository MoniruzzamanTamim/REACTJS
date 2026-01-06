import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicLifeCle from './assets/basicLifeCycle/BasicLifeCycle'
import ClockDesign  from './assets/clock/Clock-design'
import REFEXP from './assets/refExample/REF'
function App() {
 

  return (
    <>
      <BasicLifeCle/>
      <ClockDesign/>
      <REFEXP/>
    </>
  )
}

export default App
