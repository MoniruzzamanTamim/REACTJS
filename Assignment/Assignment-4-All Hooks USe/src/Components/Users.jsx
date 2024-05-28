import React,{useContext} from 'react';
import ContextApi from './ContextApi';
import User from './User'




const Users = () => {
    const {UserInfo} = useContext(ContextApi);
    
   const {UserData}= UserInfo;
   
   

  return (
    <>
    {UserData.map((data)=>
    
      <User key={data.Roll}  data={data}/>
  
    )}
    </>
    
  )
}

export default Users