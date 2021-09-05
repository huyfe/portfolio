import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

HeroSection.propTypes = {

};

function HeroSection(props) {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="hero-section__intro">
                            <h1>
                                <span>Hi, I am</span>
                                <strong>Tran <br /> Quoc Huy.</strong>
                                <span className="line"></span>
                            </h1>
                            <ul className="hero-section__social d-flex">
                                <li>
                                    <Link to="https://www.linkedin.com/in/huy-tran-57777b202/">
                                        <span className="icon-linkedin"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/in/huy-tran-57777b202/">
                                        <span className="icon-github"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/in/huy-tran-57777b202/">
                                        <span className="icon-dribble"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hero-section__thumbnail">
                            <img src="./avatar.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hero-section__info">
                            <h2>
                                Web Developer and UI Designer, based in Ho Chi Minh city, Vietnam.
                            </h2>
                            <p>
                                I am a “half-blood” Web Developer and UI Designer who has experience creating many projects in a various industry. In other words, I understand how to build an aesthetic, powerful, and lightweight website at once.
                            </p>
                            <ul className="hero-section__contact d-flex">
                                <li>
                                    <button className="email"><span className="icon-email"></span> Email Me</button>
                                </li>
                                <li>
                                    <button className="download"><span className="icon-download"></span> Download CV</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;