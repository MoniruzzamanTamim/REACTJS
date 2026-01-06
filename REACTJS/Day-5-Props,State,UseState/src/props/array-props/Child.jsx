import React from 'react'

function Child({users,onUserClick}) {
  return (
 <>
  <div style={{display:"flex", justifyContent:"space-between", gap:'10px'}}>
    {users.map((user) => {
    const { name, age, isActive } = user;

    return (
      <div className="div" key={user.id} style={{border:'1px solid blue', width:"99%", padding:"20px 0"}}>
        <h4 onClick={() => onUserClick(name)}>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <h4 style={{ color: isActive ? "green" : "red" }}>Status: {isActive ? "Active" : "Not Activated"}</h4>
        <button onClick={()=> onUserClick(name) }>Say Hello</button>
      </div>
    );
  })}
  </div>
</>

    
  )
}

export default Child