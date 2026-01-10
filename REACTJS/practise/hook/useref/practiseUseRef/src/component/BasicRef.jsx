import React, { useEffect, useRef } from 'react'
import ChildRef from './ChildRef'
import Time from './Time';

function BasicRef() {
    const nameRef =useRef();
    const childRef =useRef();


    useEffect(()=>{
    nameRef.current.focus()
    },[])

   const  chnageChildDom =()=>{
        const name = childRef.current.value;
        console.log(name); 
    }

  return (
    <div>
        


        <h1>Basic Use ref</h1>
        <div>
            <input type="email" name="" id=""  ref={nameRef}/>
           
        </div>
        <div>
            <ChildRef ref={childRef} placeholder="This Item Change From Parent " />
             <button type="button" onClick={chnageChildDom}>Change Child Component DOm From Parent Using UseRef</button>
        </div>

        <div>
            <Time/>
        </div>
    </div>
  )
}

export default BasicRef