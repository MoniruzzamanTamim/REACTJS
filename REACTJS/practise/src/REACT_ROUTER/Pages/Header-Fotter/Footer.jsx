import React from 'react'
import logo from './PIC.png'
import {NavLink} from 'react-router-dom'



const Footer = () => {
  return (
    <div className='footer-design'>

        <div className='footer-logo'>
            <img src={logo} alt="" srcset="" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolore dignissimos quidem earum modi facere enim totam error id reiciendis?</p>
            </div>
        </div>

        <div className='footer-menu'>
            <h4>Menu</h4>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/*'}>Error</NavLink>
        </div>
        <div className='footer-menu'>
            <h4>Menu</h4>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/*'}>Error</NavLink>
        </div>

        <div className='footer-contact-info'>
           <h4>Contact US</h4>
           <h6>Phone: 01739820399</h6>
           <h6>Email: tamimiqbal896</h6>
           <h6>Address : 7 Elephent Road Dhaka</h6>
        </div>
        
    </div>
  )
}

export default Footer