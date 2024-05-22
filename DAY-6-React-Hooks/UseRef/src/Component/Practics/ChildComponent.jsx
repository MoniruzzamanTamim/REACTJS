import React,{useRef} from 'react'
import { forwardRef } from 'react'

const ChildComponent = (props, ReceiveRefFromParent) => {
  
  return (
    <div>

            <input type="text" ref={ReceiveRefFromParent} placeholder={props.placeholder} />
           

    </div>
  )
}

const Forwardref = forwardRef(ChildComponent);

export default Forwardref;