// 1 ==>    Import UseRef
import React,{useRef} from 'react'

const FormHandle = () => {

    // 2==> Create useRef For Per Element 
    const userNameRef = useRef();
    const userPasswordRef = useRef();

const handlevalue =(e)=>{
    e.preventDefault()
    // 4==> USe AND Handle UseRef
    const UserName = userNameRef.current.value;
    const UserPassword = userPasswordRef.current.value;
    userNameRef.current.style.color = "red";
    userPasswordRef.current.style.color = "red";
    console.log({
        UserName,UserPassword
    });
}
  return (
    <div>

 
                         <form onClick={handlevalue}>
                            <div>
                                {/* 3==> Link UseRef */}
                            <input type="text" name="name" id="name"  ref={userNameRef}/>
                            </div>
                            <div><input type="password" name="password" id="password" ref={userPasswordRef} /></div>
                            <button type='submit'>Submit Data</button>
                         </form>

    </div>
  )
}

export default FormHandle;