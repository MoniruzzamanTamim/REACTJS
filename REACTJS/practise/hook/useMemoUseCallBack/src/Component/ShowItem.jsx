import React from 'react'

function ShowItem({title,count}) {
 console.log(`Rendaring ${title}`);
  return (
    <>
    <h1>{title}</h1>
    <span>{count}</span>
    
    </>
  )
}

export default  React.memo(ShowItem)