import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='Header-design'  >
        <h4 onClick={()=> navigate('/')} >TAMIM</h4>
        <div>

        </div>
         
         <div className='menu-design' >
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/blogs'}>Blogs</NavLink>
         </div>

         <div className='btn-design'>
            <button>Our Information</button>
         </div>
        
    </div>
  )
}

export default Header