import React from 'react'

function Child({changeMessage}) {
    const name = "Tamim-Child";
  return (
    <div>


        <button type="button" onClick={()=> changeMessage(name)}>Child-1 Function</button>
    </div>
  )
}

export default Child