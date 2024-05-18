import React from 'react';
import Todo from './todo'

function Todos(props) {
    return (
               <div>

                {props.todos.map((todo)=>
                    
                    <Todo todo={todo.newtodo}  key={todo.id} id={todo.id} Removetodo ={props.onRemovetodo} />
                  )}
               </div>
    );
}

export default Todos;