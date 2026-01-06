import React from 'react'
import Samima from './Samima'
import Tamim from './Tamim'



function parent() {
  return (
    <>
    <h1>Basic Props to Sent Data parent to Child</h1>
    <Samima name="Samima"/>
    <Tamim name ="tamim" />
    </>
  )
}

export default parent