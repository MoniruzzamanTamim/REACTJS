import React, {useState, useCallback} from 'react'

const Countone = ({vallueforcount}) => {
    console.log("CountONE is Rendaring");
    const[count, setCount]=useState(0)
  return (
    <div>
      <p>Component Second is Update when update count vallue</p>
      <p>{vallueforcount}</p>
    </div>
  )
}

export default React.memo(Countone)