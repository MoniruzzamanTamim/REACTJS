import React from 'react'

function Title() {
    console.log("Title Readering...");
    
  return (
   <>
    <h1>Title</h1>
    <button onClick={()=> console.log("Title Clicked") }> onclick</button>
   </>
  )
}

export default React.memo(Title)