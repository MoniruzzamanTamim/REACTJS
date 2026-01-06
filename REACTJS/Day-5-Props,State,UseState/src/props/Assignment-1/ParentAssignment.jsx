import React, { useState } from 'react'
import AddTodoValue from './AddTodo';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';



function ParentAssignment() {

  const [todos, setTodos] = useState([])

    const AddTodo = (addTodo)=>{
      setTodos((oldtodo)=>{
        return [...oldtodo, {id: uuidv4(), addTodo} ]
      })   
      
    }
  
  const delettodo =(id)=>{
    const deletedTodo = todos.filter((deletedTodo)=>deletedTodo.id !== id )
    setTodos(deletedTodo)
    
  }
  return (
    <>
    <div style={{margin:"50px 0", borderTop:"2px solid red"}}>Assignment-1 ToDO Apps</div>

    <AddTodoValue onAddTodo={AddTodo}/>
    <Todos onTodos={todos}  removetodo={delettodo}/>
    
    </>
    
  )
}

export default ParentAssignment