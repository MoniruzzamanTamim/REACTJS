import { useState } from 'react'


function SecondForm() {
  const [name, setName] = useState('')
 

  const nameVallueHandle= (e)=>{
    setName(e.target.value);
  }
   



    const [email, setEmail] = useState('')
   
  
    const emailVallueHandle= (e)=>{
        setEmail(e.target.value);
    }
     
  
    const submitData =(e)=>{
           e.preventDefault();
           
           const formvallueset = {
            name,
            email
           }
           console.log(formvallueset);
    }
  
  
 

  return (
    <>


    <form action="" onSubmit={submitData}>
         <div>
            <label htmlFor="name" name="name">Name : </label>
            <input type="text" name="name"   onChange={nameVallueHandle}/>
         </div>
         <div>
            <label htmlFor="name" name="name">Email : </label>
            <input type="email" name="name"   onChange={emailVallueHandle}/>
         </div>
         <br/>
         <div>
            <button type="submit" >Submit Data</button>
         </div>
    </form>
     
    </>
  )
}

export default SecondForm;
