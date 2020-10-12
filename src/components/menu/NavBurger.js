import React from 'react'; 
import burgerIcon from '../../assets/images/burger-menu.svg'; 
import { Dropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'; 

function NavBurger() {

    return(
        <Dropdown id="burger-icon" className="burger-icon">
            <Dropdown.Toggle 
                id="burger-toggler" 
                className="burger-toggler"
                >
                <img src={burgerIcon} alt="" /> 
                <Dropdown.Menu>
                    <LinkContainer to="/"> 
                        <Dropdown.Item>
                            Home
                        </Dropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/gallery"> 
                        <Dropdown.Item>
                            Gallery
                        </Dropdown.Item>
                    </LinkContainer> 
                    <LinkContainer to="/contact"> 
                        <Dropdown.Item>
                            Contact
                        </Dropdown.Item>
                    </LinkContainer> 
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    )
}

export default NavBurger 