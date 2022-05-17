import React from 'react';
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    return(
        <div className='navbar'>
            <NavLink className="nav" activeClassName="nav-active" to="/home">Home</NavLink>
            <NavLink className="nav" activeClassName="nav-active" to="/connects">Connect</NavLink>
            <NavLink className="nav" activeClassName="nav-active" to="/about">About</NavLink>
            <NavLink className="nav" activeClassName="nav-active" to="/contact">Contact</NavLink>
        </div>
    )
}

export default NavBar;