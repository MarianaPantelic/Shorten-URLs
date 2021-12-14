import React from 'react';
import IllustrationWorking from '../images/illustration-working.svg';

const Hero = () => {
    return (
        <div className="hero-container d-flex justify-content-between">
           <div className="hero-content-container">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <div role="button" className="btn-get-started">Get started</div>
           </div> 
           <img src={IllustrationWorking} alt="Illustration man working on computer" className="hero-img"/>
        </div>
    );
};

export default Hero;