import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.jpg';
import './Navbar.css';
import Dropdown from './Dropdown.js';

const Navbar = () => {
    const[show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    return (
        <>
        <section className='navbar-bg'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
                onClick={() =>setShow(!show)}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? "show" : "" }`} >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/Main">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Aboutus">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Work">Work</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Program">Programs</NavLink>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <NavLink className="nav-link" to="/">Service</NavLink>{dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Tests">Gallery</NavLink>
                    </li>
                    <li className="nav-item-dropdown">
                    <NavLink className="nav-link-dropdown" to="/Tests">Get Involved</NavLink>
                    <ul className="dropdown-menu"  aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" to="#">Join US</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">Donate</NavLink></li>
                        <li><NavLink className="dropdown-item" to="#">Contact Us</NavLink></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </section>
        </>
    )
}

export default Navbar
