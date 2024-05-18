import React,{useState} from 'react';
import Todos from './todos'
import { v4 as uuidv4} from 'uuid';
import Newtodo from './newtodo'
import style from './home.module.css'

const Home = () => {

// const dammytodosData = [ 
//     {
//      title:"1g",
//      des:"gg",
//      id:1
//     },
//     {
//      title:"2g",
//      des:"gg",
//      id:2
//     }
// ];

// 
const  [newTodoData , setNewtodoData] = useState([])
// ADD NEW TODO
const newtodoData = (newtodo)=>{
    setNewtodoData((previData)=>{
        return [...previData,{ id:uuidv4() ,newtodo}]
        
    })
    

}
// Delet todo Item 
const Removetodo = (id)=>{
    console.log(id);
    const deletTodosData = newTodoData.filter((delTodoNEw)=>delTodoNEw.id !== id )
    setNewtodoData(deletTodosData)
}

    return (

        <div className= {style.homeDesign}>
            <Newtodo onNewtodoData={newtodoData}  />
            <Todos todos={newTodoData}  onRemovetodo={Removetodo}/>
            
        </div>
    );
};

export default Home;