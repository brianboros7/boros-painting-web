import React from 'react'; 
import NavBar from '../../menu/NavBar'; 
import './style.scss'

function Header() {
    // const images = [{ id: "1", src: logo, alt: "Boros Painting" }]

    return (
        <header> 
            {/*
            <div className="logo">
                {images.map((image)  => ( 
                    <img key={image.id} src={image.src} alt={image.alt} />
                ))} 
            </div> */}
            <NavBar /> 
        </header>
    )
}

export default Header 