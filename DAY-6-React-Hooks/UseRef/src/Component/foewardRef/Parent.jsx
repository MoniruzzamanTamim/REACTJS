import React, {useRef, useEffect} from 'react'
import Child from './Child'
import BasicRef from '../Practics/BasicRef';

const Parent = () => {
  
 const UserRef = useRef();
 useEffect(()=>{
    UserRef.current.focus();
 }, [])

  return (
    <div>

      <Child ref={UserRef}   placeholder = "This is Fordward Ref"/>
<br />
<h1>This is secont time practics part</h1>
      <BasicRef/>
    </div>

  )
}

export default Parent