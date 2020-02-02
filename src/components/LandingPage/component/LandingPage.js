import React from 'react';
import { Link } from 'react-router-dom';
import scenic from '../../../assets/images/scenic.jpg';
import styled from 'styled-components';

const HeroImage = styled.div`
    background-image: url(${scenic});
    background-size: cover;
    height: 70vh;
`;

const LandingPage = () => {
    return (
        <div>
            <HeroImage>
                <div className="hero__container">
                    <h1>
                        <span>JetCake</span>
                    </h1>
                    <span className="des">Hiring Rockstar Remote Devs!!!</span>
                    <Link to="/register" className="join__us-btn">
                        Join Us
                    </Link>
                </div>
            </HeroImage>
            <section id="what" className="bg-light py-3">
                <div className="section__container">
                    <h2 className="m-heading text-center">
                        <span className="text-primary">What</span> We Do
                    </h2>
                    <div className="items">
                        <div className="item">
                            <i className="fas fa-laptop fa-2x" />
                            <div>
                                <h3>Web Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, unde.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <i className="fas fa-sitemap fa-2x" />
                            <div>
                                <h3>Web Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolor.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <i className="fas fa-cogs fa-2x" />
                            <div>
                                <h3>DevOps</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, eos!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
