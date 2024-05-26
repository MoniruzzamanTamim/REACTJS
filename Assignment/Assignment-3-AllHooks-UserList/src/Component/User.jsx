import React,{useContext} from 'react'
import Context from './Context'
import style from './user.module.css'


const user = (props) => {
    const {id,name, phone, address}=props.data;
    const{city}= address;

    const {dispatch}= useContext(Context)
   
    const RemoveITEM =(id)=>{
        dispatch({type: "DELETE", payload: id})
    }

  return (
    <div style={{ textAlign : "left", marginTop: "20px"}}>
      
            <span style={{margin: "0"}}>ID: {id} </span>
            <h6 style={{margin: "0"}}>NAME: {name}</h6>
            <p style={{margin: "0"}}>PHONE: {phone}</p>
            <p style={{margin: "0"}}>ADDRESS: {city}</p>
            <button onClick={()=>RemoveITEM(id)}>Remove Item</button>

            

    </div>
  )
}

export default user