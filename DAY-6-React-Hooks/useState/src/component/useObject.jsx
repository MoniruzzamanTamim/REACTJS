import React, {useState} from 'react';

const useStateObject = () => {


    const [user, setUser]= useState({name : 'TAMIM',email: '', password : '' })
    const {name,email,password}= user;

    const vallueHandle = (e)=>{

        
        setUser({...user,[e.target.name]:e.target.value})

        // const fieldName = e.target.name;
        // if(fieldName === 'name'){
        //     setUser( {name: e.target.value,email,password})
        // }
        // if(fieldName === 'email'){
        //     setUser( {name,email: e.target.value,password})
        // }
        
        // if(fieldName === 'password'){
        //     setUser( {name,email,password: e.target.value})
        // }
        
        

       

     }
   
    

   const  ONSUBmitDATA = (e)=>{
         e.preventDefault()
         console.log(user)
         let div = document.createElement("p");
         div.innerHTML= "<p>{name}</p>"
        //  document.body.appendChild(div);
  
        let  ShowResult = document.querySelector(".ShowResult")
        ShowResult.appendChild(div)


    }
    return (
             <>
                      

            <div className='ShowResult'>ttt</div>
             
             <form action="" onSubmit={ONSUBmitDATA}>
            <div>
                <label htmlFor="Name">Name</label>
            <input type="text"   name='name' onChange={vallueHandle} value={name} /> <br/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id=""   onChange={vallueHandle} /> <br/>
            <label htmlFor="password">Password</label>
            <input type="password" id="pwd" name="password"  onChange={vallueHandle} />
            </div>
            
               <div>
               <button type="submit" > Submit Data</button>
               </div>
           </form>
             </>
        
           
           
            
      
    );
};

export default useStateObject;