import React from 'react'
import Child from './Child'

function ParentArray() {
      const users = [
    { id: 1, name: "Ayesha", age: 22, isActive: true },
    { id: 2, name: "Rahim", age: 17, isActive: false },
    { id: 3, name: "Karim", age: 25, isActive: true },
  ];

  const handleUserClick = (name) => {
    alert("Hello " + name);
  };
  return (
    <>
    <div style={{marginTop:"25px"}}></div>
    <Child users={users}  onUserClick={handleUserClick} />
    </>
  )
}

export default ParentArray