import React from 'react';
import projectsImage from '../../assets/images/boros-painting-projects.png'; 

function Services() {

    return(
        <section className="services-container">
            <div className="services-main">
                <div className="services-content">
                    <h3>We'll do just about anything !</h3>
                    <div className="services-image"> 
                        <img src={projectsImage} alt="" />
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Services