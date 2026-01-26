import React from 'react'

function Child({image,name,roll}) {
  return (
    <>
            <div className="userbox">
                <img src={image} alt="" style={{width:'30%'}} />
                <h3>{name}</h3>
                <span>{roll}</span>
            </div>
    </>
  )
}

export default Child