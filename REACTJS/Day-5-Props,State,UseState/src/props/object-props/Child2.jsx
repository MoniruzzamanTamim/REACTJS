import React from 'react'

function Child2(props) {
    const {username,isLoggedIn} = props.user;
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <span>UserName: {username} </span>
      <span>Message: {isLoggedIn ? "Welcome to out Dashbord" : "Please Login"} </span>
    </div>
  )
}

export default Child2