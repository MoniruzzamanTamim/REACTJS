/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul style={{display:'flex', justifyContent:'center', listStyle:'none', padding:'0 10px'}}>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/"}>Home</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/about"}>About</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/contact"}>Contact</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/*"}>404ERROR</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/blogs"}>Blogs</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/uselocation"}>UseLocation Blogs</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/users"}>Users</NavLink></li>
          <li style={{padding:'0 5px', textDecoration:'none'}}><NavLink to={"/protecedvalue"}>protecedvalue</NavLink></li>
       
          
        </ul>
    </div>
  )
}

export default Header