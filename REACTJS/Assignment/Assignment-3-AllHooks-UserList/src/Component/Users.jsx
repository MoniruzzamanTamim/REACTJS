import React,{useContext} from 'react'
import Context from './Context'
import User from './User'
import style from './user.module.css'

const Users = () => {
    
    const SetUserData = useContext(Context)
    
    const {userList} = SetUserData

    const {isLoading, userData, error, finalMessage } =userList;
   
    
  return (
    <div className={style.Designlist}>
        
        {isLoading && <p>API LOADING....</p>}
        {userData && userData.map((data)=>
           <User data={data} key={data.id}  />
          
        )}
        {error &&  <p>Your API NOT CONNETED</p>}
        {finalMessage && finalMessage}

        
    </div>
  )
}

export default Users


