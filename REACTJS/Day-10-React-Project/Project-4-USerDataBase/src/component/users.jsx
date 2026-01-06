import React from 'react'
import User from './user'
import style from './users.module.css'

const Users = (props) => {
  
  return (
    <div>
        
        
        <table>
  <tr>
    <th>Name</th>
    <th>UserNAme</th>
    <th>Email</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>
 
</table>
       {props.userInput.map((data)=>
                           <User key={data.id} data={data.userData} id={data.id} onDelete= {props.onDelete}  />
                  )}

    </div>
  )
}

export default Users