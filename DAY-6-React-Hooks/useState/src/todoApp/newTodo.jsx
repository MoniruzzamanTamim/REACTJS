import React,{useState} from 'react';


  

const newTodo = (props) => {
    
    const [newtodo, setNewtodo]= useState('')

    const newtodoHandle = (e)=>{
        setNewtodo(e.target.value)
    }

    const SubmittodoData = (e)=>{
        e.preventDefault()
    
        props.toNewtodo(newtodo)

    }

           
    return (
        <div>
    
           <form action="" onSubmit={SubmittodoData}>
         
              <div>
              <label htmlFor="Name">NEW TODO : </label>
            <input type="text" value={newtodo} onChange={newtodoHandle}  /> 
              </div>
               <button type="submit" > Submit Data</button>
               
           </form>
        
        </div>
    );
};

export default newTodo;








