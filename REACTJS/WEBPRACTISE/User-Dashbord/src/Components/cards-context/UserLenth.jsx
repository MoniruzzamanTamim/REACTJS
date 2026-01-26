import React,{useContext} from 'react'

import CardContex from './CardContex';


function UserLenth() {
    const Data = useContext(CardContex)
  const {userLenth}=Data
  return (
    <div>Total User: {userLenth}</div>
  )
}

export default UserLenth