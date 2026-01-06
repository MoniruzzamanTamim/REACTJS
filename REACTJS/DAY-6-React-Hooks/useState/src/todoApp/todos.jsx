import React from 'react';

import Todo from './todo'


const todos = (props) => {
    
    return (
        <div> 
            {props.TodoData.map((todo, i)=>
            <Todo key={i} todo={todo} />
        )} 
        </div>
    );
};

export default todos;

