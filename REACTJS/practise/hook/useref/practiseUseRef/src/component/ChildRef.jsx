import React from 'react'
import { forwardRef } from 'react'

function ChildRef(props,childRef) {
  return (
    <div>
        
        <input type="text" name="" id="" ref={childRef} placeholder={props.placeholder} />
    </div>
  )
}
const childRef=forwardRef(ChildRef);

export default childRef