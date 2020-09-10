import React from 'react'; 
import mainBanner from './HomeImageData'; 
import './style.scss'; 
import About from './About'; 

function Home() {
    return(
        <main>
            <div className="main-banner">
                {mainBanner.map((image) => (
                    <img key={image.id} src={image.src} alt={image.alt} /> 
                ))}    
            </div>
            <About />
        </main>
    )
}

export default Home 