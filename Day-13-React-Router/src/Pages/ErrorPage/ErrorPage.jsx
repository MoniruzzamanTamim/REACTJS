import React from 'react'
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
       <h1>
        404 Error Page not Found <br />
        <button onClick={()=>navigate("/") }>Back to Home</button>
       </h1>
       
    </div>
  )
}

export default Navbar