import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar=()=>{
    return (    
        <nav className="navbar">
            <div className="container">
            <div className="logo">
                <img src={require('../images/logo.jpg')} alt='logo' width='50px' height='50px' />
            </div>
            <div className="nav-elements">
                <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/blogs">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )

}

export default Navbar;