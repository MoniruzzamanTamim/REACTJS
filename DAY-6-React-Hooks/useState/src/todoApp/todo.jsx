import React from 'react';
import Csstodo from './todo.module.css'

const todo = (props) => {
    console.log(props.todo);
   
    return (
        <div className={Csstodo.todoDesign}>
            <h4>{props.todo}</h4>
            <button>
                <i className='fa fa-trash fa-2x'></i>
            </button>
            
        </div>
    );
};

export default todo;

