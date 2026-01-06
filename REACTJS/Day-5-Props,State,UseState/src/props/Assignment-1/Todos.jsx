import React from 'react'
import Todo from './Todo'

function Todos({onTodos,removetodo}) {  
  return (
    <div>
        {onTodos.map((todo,index)=>
        <Todo todo={todo.addTodo} key={todo.id} id={todo.id} serial={index+1} removetodo={removetodo} />

        )}
    </div>
  )
}

export default Todos