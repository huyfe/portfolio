import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// Import components
import Title from '../Title';

AboutSection.propTypes = {

};

function AboutSection(props) {
    return (
        <section className="about-section container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="about-section__thumbnail">
                            <img src="./images/illustration.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-section__info">
                            <Title subTitle="About Me" title="Why hire me for your next project?" colorTitle="#fff" />
                            <div className="content">
                                <p>
                                    Currently I am working as a employee of the company. Now I’ve studying at FPT Polytechnic (HCM), Teenager as a Front-end Developer.
                                </p>
                                <p>
                                    I find my self as a creative, reliable and detailed freelancer who can work independently without too many detailed instructions. I have a principle that is "stay simple and stay humble". I believe that in simplicity there is a complexity and  very deep thoroughness. I see every project as a process of solving a problem. Then it is time for your problems to be resolved in detail, in depth, and of course in simplicity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;