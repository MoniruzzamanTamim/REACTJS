import React from 'react'

function Child({ userData }) {
  const { name, age, isActive } = userData;

  return (
    <div>
    <p>My Name is {name}</p>
      <p>My Age is {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  )
}

export default Child
