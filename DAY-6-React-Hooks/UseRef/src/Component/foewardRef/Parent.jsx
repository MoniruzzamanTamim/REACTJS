import React, {useRef, useEffect} from 'react'
// import Child from './Child'

const Parent = () => {
  
 const UserRef = useRef();
 useEffect(()=>{
    UserRef.current.focus();
 }, [])

  return (
    <div>

      <Child ref={UserRef}   placeholder = "This is Fordward Ref"/>
    </div>
  )
}

export default Parent