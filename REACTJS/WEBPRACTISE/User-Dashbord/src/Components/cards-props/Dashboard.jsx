import React, { useEffect, useState } from 'react';
import UserData from '../../API/userApi';
import UserCard from './UserCard';
import Usertable from './UserTable';
import Search from './Search';

function Dashboard() {
  const [newuser, setNewUser] = useState([])
  const [search, setSearch] = useState("")

  // API DATA
  const {user,error,loading} = UserData("https://jsonplaceholder.typicode.com/users")
  // API data → local state
    useEffect(() => {
      setNewUser(user);
  }, [user]);

    const HandleSearchValue=(e)=>{
      const value = e.target.value
      setSearch(value) 
    }
  // 🔍 Search filter
  const filteredUsers = newuser.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );




    const DeleteUser=(user)=>{
      const id = user.phone
      const deletedusers = newuser.filter((deleteduser)=>deleteduser.phone !== id)
      console.log(deletedusers);
      setNewUser(deletedusers)
    }


  return (
    
    <>
    <Search HandleSearchValue = {HandleSearchValue} search ={search} />
    <UserCard totalUser={filteredUsers.length} />
    <Usertable users={filteredUsers} error={error} loading={loading}  onDeleteUser={DeleteUser} />

    </>
  )
}

export default Dashboard