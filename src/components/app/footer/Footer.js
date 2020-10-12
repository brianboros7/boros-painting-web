import React from 'react';
import NavBurger from './../../menu/NavBurger'; 
import './style.scss'; 
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {

    return(
        <footer>
            <div className="footer-container">
                <div className="footer-nav"> 
                    <NavBurger /> 
                </div> 
            </div> 
            <p><CopyrightIcon className="copyright-icon" />All Rights Reserved. Boros Painting, LLC.</p>
        </footer>
    )

}

export default Footer 