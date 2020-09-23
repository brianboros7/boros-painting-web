import React from 'react'; 
import burgerIcon from '../../assets/images/burger-menu.svg'; 
import { Dropdown } from "react-bootstrap";

function NavBurger() {

    return(
        <Dropdown id="burger-icon" className="burger-icon">
            <Dropdown.Toggle 
                id="burger-toggler" 
                className="burger-toggler"
                >
                <img src={burgerIcon} alt="" /> 
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
                    <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    )
}

export default NavBurger 