import React,{useRef, useEffect, useState} from 'react'
import FormHandle from './FormHandle';

export const BasicRef = () => {
  
    const basicRef = useRef("test")

   useEffect(()=>{
    basicRef.current.focus();
  
   },[])

  return (
    <div>

<h1>Basic UseREF</h1>
                           <form action="">
                            <input type="text" name="" id=""  ref={basicRef}/>
                            </form>  

                            <FormHandle/>

    </div>
  )
}

export default BasicRef;