import React,{useRef} from 'react'
import ParentComponent from './ParentComponent';



const BasicRef = () => {
    const userNameRef = useRef();

    const HandleClick=(e)=>{
        e.preventDefault()
        const name = userNameRef.current.value;
        console.log(name);
    }

  return (
    <div>
      <p>Vallue</p>
      <div>
        <input type="text" name="" id="" ref={userNameRef} />
        <button type="submit" onClick={HandleClick}>Submit input </button>
        <br /><br />
        

        <ParentComponent/>
      </div>
         
    </div>
  )
}

export default BasicRef