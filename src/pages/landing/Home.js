import React from 'react'; 
import mainBanner from '../../assets/images/boros-painting-header-banner.png'; 
import './style.scss'; 
import About from './About'; 
import Brand from './Brand'; 
import Values from './Values'; 
import Services from './Services'; 

function Home() {
    return(
        <main>
            <div className="main-banner">
                <img src={mainBanner} alt="Home banner " />
            </div>
            <Values /> 
            <About />
            <Brand /> 
            <Services /> 
        </main>
    )
}

export default Home 