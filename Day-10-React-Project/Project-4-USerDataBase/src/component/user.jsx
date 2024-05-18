import React from 'react'
import style from './users.module.css'

export const User = (props) => {
const {name, username, email, password}= props.data


const Datadelete = (id) =>{
       
    props.onDelete(id)
    
}


  return (
    <div>
       
       <table>
  
 
  <tr>
    <td>{name} </td>
    <td>{username} </td>
    <td>{email} </td>
    <td>{password}</td>
    <td className={style.btn} onClick={()=>{Datadelete(props.id)}}> <i className='fa fa-trash'></i>  </td>
  </tr>
  
  
 
</table>


      
         
    </div>
  )
}

export default User;