import React from 'react'; 
import {Navbar, Nav} from 'react-bootstrap'; 
import {Link} from 'react-router-dom'; 
import logo from '../../assets/images/boros-painting-logo.png';
import './style.scss';


function NavBar() {
    return (
        <Navbar className="navigation"> 
            <Navbar.Brand> 
                <Link to="/" id="logo"> 
                    <img src={logo} alt="" /> 
                </Link>
            </Navbar.Brand> 
            <Link to="/" className="nav-item">Home</Link> 
            <Link to="/gallery" className="nav-item">Gallery</Link>
        </Navbar>
    )
}

export default NavBar 