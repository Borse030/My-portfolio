import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
    <h3 className='nav-heading'>My portfolio</h3>
     <NavLink activeClassName="active" className="nav" to="/">Home</NavLink> 
     <NavLink activeClassName="active" className="nav" to="/about">About</NavLink> 
     <NavLink activeClassName="active" className="nav" to="/project">Project</NavLink> 
     <NavLink activeClassName="active" className="nav" to="/contact">Contact</NavLink> 

    </div>
  )
}

export default Navbar
