import React from 'react'; 
import {Link} from 'react-router-dom'; 
import logo from '../../assets/images/boros-painting-logo.png';
import './style.scss';


function NavBar() {
    return (
        <nav className="navbar"> 
            <nav className="navigation"> 
                <Link to="/" className="navbar-brand logo"> 
                    <img src={logo} alt="" /> 
                </Link>
                <Link to="/" className="nav-item">Home</Link> 
                <Link to="/gallery" className="nav-item">Gallery</Link>
            </nav> 
        </nav>
    )
}

export default NavBar 