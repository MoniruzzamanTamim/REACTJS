import React from 'react'
import { forwardRef } from 'react'

const child = ({placeholder}, receiveRef) => {


  return (
    <div>


<br />
<br />
<br />

<input type="text" name='name' placeholder= {placeholder}  ref={receiveRef}  />   
    </div>
  )
}

const forradInput = forwardRef(child)

export default forradInput;