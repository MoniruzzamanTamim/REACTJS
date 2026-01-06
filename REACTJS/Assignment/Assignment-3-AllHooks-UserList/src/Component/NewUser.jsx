import React,{useState, useContext} from 'react'

import Context from './Context'



const newUser = () => {

    const userDataSent = useContext(Context)
    
    const { uuid, dispatch}= userDataSent

    const [inputCollect, setInputCollect]=useState()

    const handlevallue =(e)=>{
        setInputCollect((oldinput)=>{
            return {...oldinput, [e.target.name]:e.target.value}
        })
    }
  

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type: "ADD", payload: inputCollect})
        console.log(inputCollect);
        

    }

   
    

  return (
    <div>

        <form action="" onSubmit={handleSubmit}>
        <input type="number" name="id" id="" onChange={handlevallue} />
            <input type="text" name="name" id="" onChange={handlevallue} />
            <input type="number" name="phone" id="" onChange={handlevallue} />
            <input type="text" name="address" id=""  onChange={handlevallue}/>
            <button>Add Item</button>
        </form>
    </div>
  )
}

export default newUser