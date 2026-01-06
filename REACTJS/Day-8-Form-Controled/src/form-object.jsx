import { useState } from 'react'


function ThirdForm() {

    const [formVallue, setFormVallue] = useState ({name: '', email: '', password: ''})
   const {name, email, password} = formVallue;

  const valluehandlename = (e) =>{
    setFormVallue({name: e.target.value, email, password})
  }
  const valluehandleemail = (e) =>{
    setFormVallue({name, email: e.target.value, password})
  }
  const valluehandlepassword = (e) =>{
    setFormVallue({name, email, password: e.target.value})
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
         <input type="text" name='name' onChange={valluehandlename} />
      </div>
      <div>
         <label htmlFor="email">Email</label>
         <input type="email" name='email'  onChange={valluehandleemail} />
      </div>
      <div>
         <label htmlFor="password">Password</label>
         <input type="text" name='password'   onChange={valluehandlepassword}/>
      </div>

      <div>
         <button type="submit">Submit Data</button>
      </div>

    </form>


   
     
    </>
  )
}

export default ThirdForm;
