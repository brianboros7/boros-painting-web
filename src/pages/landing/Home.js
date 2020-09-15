import React from 'react'; 
import mainBanner from '../../assets/images/boros-painting-header-banner.png'; 
import './style.scss'; 
import About from './About'; 

function Home() {
    return(
        <main>
            <div className="main-banner">
                <img src={mainBanner} />
            </div>
            <About />
        </main>
    )
}

export default Home 