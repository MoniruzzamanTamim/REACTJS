import React,{useState} from 'react'

function AddTodo({onAddTodo}) {
     const [addTodo, setAddTodo]= useState({title:"", des:""});
     
     const collectvalue =(e)=>{
        const name = e.target.name;
        setAddTodo((oldTodo)=>{
            return {...oldTodo, [name]: e.target.value}
        })

        
     }
    const  submitVallue =(e)=>{
        e.preventDefault()
        onAddTodo(addTodo);
    }

  return (
    <>
    <div>AddTodo</div>

    <form action="" method="post" onSubmit={submitVallue}>
        <input type="text" name="title" id=""  onChange={collectvalue} required/>
        <input type="text" name="des" id=""  onChange={collectvalue} required/>
        <button type="submit" >Add Todo </button>

    </form>
    </>
  )
}

export default AddTodo