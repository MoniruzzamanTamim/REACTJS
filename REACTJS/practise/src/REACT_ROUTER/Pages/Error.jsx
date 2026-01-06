import React from 'react'
import logo from './Header-Fotter/PIC.png'
import { useNavigate  } from 'react-router-dom'


const Error = () => {

    const navigate = useNavigate()
  return (
    <div className='errorpage'>
        <div>
        <img src={logo} alt="" srcset="" />
         <h2>Page Not Fount - 404 Error </h2>
         <button onClick={()=> navigate('/')}>Back to Home</button>
        </div>
    </div>
  )
}

export default Error