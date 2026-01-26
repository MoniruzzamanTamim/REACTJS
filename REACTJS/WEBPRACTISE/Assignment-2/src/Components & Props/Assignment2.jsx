import React from 'react'
import Child from './Child'

import image from '../assets/pexels-pixabay-39284.jpg'

function Assignment2() {
  return (
    <>
    <div style={{margin:'10px'}}>Assignment2</div>

    <Child image={image}  name="MD Moniruzzaman Tamim" roll='2310503'  />
    
    </>
  )
}

export default Assignment2