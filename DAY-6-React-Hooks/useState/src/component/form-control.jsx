import React, { useState } from 'react';


const formControl = () => {

    const [name, setName]= useState('')

    const textfield = (e)=>{
        setName(e.target.value)
        
    }

  
    const [email, setEmail]= useState('')

    const emailfield = (e)=>{
        setEmail(e.target.value);
       
    }

    const [password, setPassword]= useState('')

    const passwordfield = (e)=>{
        setPassword(e.target.value);
        
    }

    const SubmitData = (e)=>{
        e.preventDefault()
    

        let userInfo={
            name,
            email,
            password
        }

        console.log(userInfo);

       
    }

           
    return (
        <div className='CountME'>
        
           <form action="" onSubmit={SubmitData}>
            <div>
                <label htmlFor="Name">Name</label>
            <input type="text" value={name} onChange={textfield}  /> <br/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" value={email} onChange={emailfield} /> <br/>
            <label htmlFor="password">Password</label>
            <input type="password" id="pwd" name="pwd" value={password} onChange={passwordfield}/>

            </div>
            
               <div>
               <button type="submit" > Submit Data</button>
               </div>
           </form>
            
        </div>
    );
};

export default formControl;