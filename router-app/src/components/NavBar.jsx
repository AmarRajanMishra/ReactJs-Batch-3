import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><Link to="/about">About</Link></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
        </ul>
    </>
  )
}

export default NavBar