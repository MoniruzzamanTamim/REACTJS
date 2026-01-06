import React,{useState} from 'react';
import style from './newtodo.module.css'

const Newtodo = (props) => {
    

    const [newtodo, setNewtodo] = useState({title:"", des:""})

    const handleInputValue =(e)=>{
        const name = e.target.name;
       setNewtodo((oldnewtodo)=>{
        return {...oldnewtodo, [name]: e.target.value}
       })
    }


     const subMitData = ( e)=>{
        e.preventDefault()
        props.onNewtodoData(newtodo);    
      
     }

    return (
        <div>
            
            <form action="" onSubmit={subMitData} className={style.formDesign}>
                  <div className={style.forminnerfield}> 
                  <input type="text" name="title" id="" value={newtodo.title}  onChange={handleInputValue} />
                  <input type="text" name="des" id="" value={newtodo.des}   onChange={handleInputValue} />
                  </div>
                 <div>
                 <button type='submit' >Submit Data</button>
                 </div>

            </form>
        </div>
    );
};

export default Newtodo;