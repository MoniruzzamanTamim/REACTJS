import { useState } from 'react'


function BasicForm() {
  const [count, setCount] = useState('')
 

  const nameVallueHandle= (e)=>{
    setCount(e.target.value);
  }
   

  const submitData =(e)=>{
         e.preventDefault();
         console.log(count);
  }
 

  return (
    <>


    <form action="" onSubmit={submitData}>
         <div>
            <label htmlFor="name" name="name">Name : </label>
            <input type="text" name="name"   onChange={nameVallueHandle} />
         </div>
         <br/>
         <div>
            <button type="submit" >Submit Data</button>
         </div>
    </form>
     
    </>
  )
}

export default BasicForm;
