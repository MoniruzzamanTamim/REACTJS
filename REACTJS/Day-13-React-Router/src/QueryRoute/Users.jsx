/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useSearchParams } from 'react-router-dom';


const Users = () => {
  const [searchparam, setSearchparam]=useSearchParams();
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [roll, setRoll] = useState()

  const submitQueryData=(e)=>{
    e.preventDefault();
    setSearchparam({name:name, age:age, roll:roll})
    
  }
  return (
    <div>
      <h6>GET DATA</h6>
      <h6>Age: {searchparam.get("age")}</h6>
      <h6>Name: {searchparam.get("name")}</h6>
      <h6>Roll: {searchparam.get("roll")}</h6>
      
      <h6>SET  DATA</h6>

      <form onSubmit={submitQueryData}>
        <input type="text" value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)} />
        <input type="number" value={age} placeholder='Age' onChange={(e)=> setAge(e.target.value)} />
        <input type="number" value={roll} placeholder='Roll' onChange={(e)=> setRoll(e.target.value)} />
        <button type='submit'>Submit Data</button>
      </form>


    </div>
  )
}


export default Users