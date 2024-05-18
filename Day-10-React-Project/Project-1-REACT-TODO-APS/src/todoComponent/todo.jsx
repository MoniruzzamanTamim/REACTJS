import React from 'react';
import style from './todo.module.css'

const Todo = (props) => {

    const deletetodo = (id) =>{
       
        props.Removetodo(id)
        
    }

    return (
        <div className= {style.todoStyle}>

                
                <div>
                <p className={style.des}> ID: {props.id}</p>
                <h4 className={style.title}>Title: {props.todo.title}</h4>
                <p className={style.des}> Description: {props.todo.des}</p>
               
                </div>
                
               
            <button onClick={()=>{deletetodo(props.id)}}>
                <i className='fa fa-trash'></i>
            </button>
            
        </div>
    );
};

export default Todo;