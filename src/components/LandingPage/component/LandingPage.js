import React from 'react';
import { Link } from 'react-router-dom';
import scenic from '../../../assets/images/scenic.jpg';
import styled from 'styled-components';


const HeroImage = styled.div`
    background-image: url(${scenic});
    background-size: cover;
    height: 87vh;
`;


const LandingPage = () => {
    return (
            <HeroImage>
                <div className="hero__container">
                    <h1><span>JetCake</span></h1>
                    <span className="des">Hiring Rockstar Remote Devs!!!</span>
                    <Link to="/register" className="join__us-btn">Join Us</Link>

                </div>
            </HeroImage>
    );
};

export default LandingPage;
