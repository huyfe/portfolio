import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Title from '../Title';

ServiceSection.propTypes = {

};

function ServiceSection(props) {
    return (
        <section className="service-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-section__title">
                            <Title subTitle="Services" title="Best solutions to boost your creative project." />
                            <p className="service-section__des">
                                Are you a professional who needs an attractive website for your business or service?
                                Does your current website looks like it "old-fashioned"? Is it not mobile responsive?
                                It doesn't have a modern look and optimal user experience across various devices, and browsers?
                                <strong> You're in the right place!</strong>
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-5 ms-auto">
                        <div className="service-section__content">
                            <ul className="services row">
                                <div className="col-6">
                                    <div className="services__item">
                                        <div className="icon">
                                            <span className="icon-desktop"></span>
                                        </div>
                                        <div className="name">
                                            <h3>Frontend Developer.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Good communication, details in the code and verbose documentation.
                                                I guaranteed free session until you can run my code on your system.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="services__item">
                                        <div className="icon">
                                            <span className="icon-pencil"></span>
                                        </div>
                                        <div className="name">
                                            <h3>UI/UX Designer.</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                I look at every UI design project as a process in solving a problem. I am considering all the aspects until the UI design is “work”.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;