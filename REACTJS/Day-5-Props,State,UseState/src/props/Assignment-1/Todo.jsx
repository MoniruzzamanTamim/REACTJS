import React from 'react'

function Todo({todo,serial,id,removetodo}) {
    const {title,des}=todo
    
    const deletedtodo=(id)=>{
        removetodo(id) 
    }
    
  return (
  <>
   
     <div className="todo" style={{display:"flex", justifyContent:"space-between", alignItems:"center", textAlign:"left", backgroundColor:"black", padding:"15px", color:"#ffffff"}}>
       <div className="content">
        <h1>{serial}</h1>
         <h4>Name:{title}</h4>
        <p>Des: {des}</p>
       </div>
        <div className="btn">
        <button type="button" className="close"   aria-label="Close" onClick={()=> deletedtodo(id)}>
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
     </div>
  </>
  )
}

export default Todo