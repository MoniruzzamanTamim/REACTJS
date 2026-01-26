import { useState } from 'react'


function BasicForm() {
  const [name, setName] = useState('')
 

  const nameVallueHandle= (e)=>{
    setName(e.target.value);
  }
   

  const submitData =(e)=>{
         e.preventDefault();
         console.log(name);
  }
 

  return (
    <>


    <form action="" onSubmit={submitData} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
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
