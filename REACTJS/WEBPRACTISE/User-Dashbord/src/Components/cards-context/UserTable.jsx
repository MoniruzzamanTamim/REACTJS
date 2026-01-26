import React, { useContext } from 'react'
import CardContex from './CardContex'
import Loader from '../Loader'


function UserTable() {
  const Data = useContext(CardContex)
  const {newUser,error,loading,DeleteUser}=Data
  
  return (
            <>

           
          <div className="userCard-section" style={{display:'flex', justifyContent:'start', flexWrap:'wrap'}}>
            {loading && <Loader/>}
            
            {newUser && newUser.map((user)=>{
             const {address,company,email,id,name,phone,username,website}=user
             return <div key={id} style={{flexBasis:'25%',}}>
              <h3>{username}</h3>
              <h3>{name}</h3>
              <h3>{phone}</h3>
              <h3>{email}</h3>
              <h3>{address.city}</h3>
              <h3>{company.name}</h3>
              <h3>{website}</h3>
              <button type="button" style={{backgroundColor:'black', color:'white'}} onClick={()=> DeleteUser(phone)}>Delete</button>

             </div>
            })}

            {error && <h3>{error}</h3>}
        </div>
            </>
   
  )
}

export default UserTable