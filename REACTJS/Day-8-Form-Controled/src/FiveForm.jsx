import { useState } from 'react'


function FiveForm() {

    const [formVallue, setFormVallue] = useState ({name: '', email: '', password: ''})
   const {name, email, password} = formVallue;


  const valluehandle = (e)=>{
    const fileldName = e.target.name;
    setFormVallue( {...formVallue, [e.target.name]:e.target.value})  
  }

  const vallueSubmit = (e)=>{
   e.preventDefault()
   console.log(formVallue);
  }

  return (
    <>

    <form action="" onSubmit={vallueSubmit}>
      <div>
         <label htmlFor="name">Name</label>
         <input type="text" name='name' onChange={valluehandle} />
      </div>
      <div>
         <label htmlFor="email">Email</label>
         <input type="email" name='email'  onChange={valluehandle} />
      </div>
      <div>
         <label htmlFor="password">Password</label>
         <input type="password" name='password'   onChange={valluehandle}/>
      </div>

      <div>
         <button type="submit" disabled >Submit Data</button>
      </div>

    </form>


   
     
    </>
  )
}

export default FiveForm;
