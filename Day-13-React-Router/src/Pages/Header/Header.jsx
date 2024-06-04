import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
          <li><NavLink to={"/*"}>404ERROR</NavLink></li>
          <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
          <li><NavLink to={"/uselocation"}>UseLocation Blogs</NavLink></li>
          <li><NavLink to={"/users"}>Users</NavLink></li>
          <li><NavLink to={"/protecedvalue"}>protecedvalue</NavLink></li>
       
          
        </ul>
    </div>
  )
}

export default Header