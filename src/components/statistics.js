import React from 'react';

import IconBrandRecognition from '../images/icon-brand-recognition.svg';
import IconDetailedRecords from '../images/icon-detailed-records.svg';
import IconFullyCustomizable from '../images/icon-fully-customizable.svg';


const Statistics = () => {
    return (
        <div className="bg-grey">
            <div className="statistics-container">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <div className="d-flex justify-content-between stats-container">
                    <div className="brand-container">
                        <div className="icon-container d-flex justify-content-center align-content-center">
                            <img src={IconBrandRecognition} alt="Brand Recognition Icon"/>
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                    <div className="records-container">
                        <div className="icon-container d-flex justify-content-center align-content-center">
                            <img src={IconDetailedRecords} alt="Detailed Records Icon"/>
                        </div>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="customize-container">
                        <div className="icon-container d-flex justify-content-center align-content-center">
                            <img src={IconFullyCustomizable} alt="Fully Customizable Icon"/>
                        </div>
                        <h3>Fully Customizable</h3>
                        <p>Improove brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
                <div className="connecting-line"></div>
            </div>
        </div>
    );
};

export default Statistics;