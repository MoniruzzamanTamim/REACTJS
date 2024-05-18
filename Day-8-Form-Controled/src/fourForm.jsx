import { useState } from 'react'


function ThirdForm() {

    const [formVallue, setFormVallue] = useState ({name: '', email: '', password: ''})
   const {name, email, password} = formVallue;


  const valluehandle = (e)=>{
    const fileldName = e.target.name;
    if (fileldName == "name") {
        setFormVallue({name: e.target.value, email, password})
    }
    if (fileldName == "email") {
        setFormVallue({name, email: e.target.value, password})
    }
    if (fileldName == "password") {
        setFormVallue({name, email, password: e.target.value})
    }
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
         <button type="submit">Submit Data</button>
      </div>

    </form>


   
     
    </>
  )
}

export default ThirdForm;
