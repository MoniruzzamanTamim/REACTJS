import React, { useEffect, useState } from 'react'

import userApi from '../../API/userApi'
import CardContex from './CardContex'
import UserTable from './UserTable'
import UserLenth from './UserLenth'
import Search from './Search'


function DashbordContex() {

  const {user,error,loading} = userApi("https://jsonplaceholder.typicode.com/users")

  const [newUser,setNewUser]= useState([]);
  const [search, setsearch] = useState('')

  useEffect(() => {
    setNewUser(user)
  }, [user])

  const userLenth = newUser.length;


  //  Filter Serch Item

  const HandleSearch = (e) => {
  const value = e.target.value;
  setsearch(value);

  const searchValue = user.filter((u) =>
    u.name.toLowerCase().includes(value.toLowerCase()) ||
    u.email.toLowerCase().includes(value.toLowerCase()) ||
    u.username.toLowerCase().includes(value.toLowerCase())
  );

  setNewUser(searchValue);
};
    const SearchValue ={HandleSearch,search};


   const DeleteUser =(phone)=>{
    const deletedUser = newUser.filter((user)=> user.phone !==phone)
    setNewUser(deletedUser)
   }

  const value = {
    newUser,error,loading,userLenth,SearchValue,DeleteUser
  }

  return (
            <>
 <h1>UserCard Using UseContex Hook</h1>
            <CardContex.Provider value={value}>
              <Search/> 
              <UserLenth/>
              <UserTable/>
            </CardContex.Provider>
            
            </>
  )
}

export default DashbordContex