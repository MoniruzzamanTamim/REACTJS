import React from 'react'

function Child4({profile,status}) {
    const {name,showMessage} = profile
  return (
    <>
    <div style={{height:"35px"}}>
        <div style={status ? {backgroundColor:"red"}: {backgroundColor:" "} }>
        <span style={{border: "1px solid red", padding:"15px", }} onClick={() => showMessage("Tamim")}>{name}</span>
        </div>
    </div>
    </>
  )
}

export default Child4