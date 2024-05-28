import React, {useContext} from 'react'
import ContextApi from './ContextApi';

const User = (props) => {

  const {Roll, Name,Address} = props.data;

  const {dispatch}= useContext(ContextApi)

  const Remove=(Roll)=>{
    dispatch({type: "REMOVE", payload: Roll})
    console.log(Roll);
  }


  return (
    <div>
      <span>ROLL: {Roll}</span>
      <h2>NAME: {Name}</h2>
      <p>ADDRESS: {Address}</p>
      <button onClick={()=>Remove(Roll)}>Remove</button>
    </div>
  )
}

export default User;