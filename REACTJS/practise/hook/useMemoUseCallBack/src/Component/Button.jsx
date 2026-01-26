
import React from 'react'


function Button({children,btnclick }) {
    console.log(`readaring... ${children}`);
    
  return (
    <div>
        <button type="submit" onClick={btnclick}>{children }</button>
    </div>
  )
}

export default  React.memo(Button)