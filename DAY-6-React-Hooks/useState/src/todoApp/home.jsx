import React,{useState} from 'react';
import Todos from './todos'
import Newtodo from './newTodo'
import cssDesign from "./home.module.css";


const Home = () => {
    // const TodoData = ["Todo1", "todo2"]

    const [ newTodoData, setNewTodoData] = useState([])

    const  newtodo =  (newtodo)=>{
        setNewTodoData([...newTodoData, newtodo ])
    }

    return (
        <div className={cssDesign.homedesign}>
          
          <Newtodo toNewtodo = {newtodo} />
          <Todos TodoData={newTodoData} />
       
            
        </div>
    );
};

export default Home;

