import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Title from '../Title';
import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

ProjectSection.propTypes = {

};

function ProjectSection(props) {
    let itemArray = [
        {
            subTitle: "Web Wordpress",
            title: "Giorgio Dental",
            description: "Mulazamah",
            link: "https://google.com",
            image: "./images/giorgio.webp"
        },
        {
            subTitle: "Web Wordpress",
            title: "Sessions Group",
            description: "Mulazamah",
            link: "https://google.com",
            image: "./images/sessions.webp"
        },
        {
            subTitle: "Web Wordpress",
            title: "The Grove Distillery",
            description: "Mulazamah",
            link: "https://google.com",
            image: "./images/tgd.webp"
        },
        {
            subTitle: "Web Wordpress",
            title: "Glenorchy Info",
            link: "https://google.com",
            image: "./images/glen.webp"
        }
    ];

    let listItem = itemArray.map(item => {
        return <Item subTitle={item.subTitle} title={item.title} description={item.description} link={item.link} image={item.image} />
    })

    const splideOptions = {
        type: 'slide',
        perPage: 2,
        perMove: 1,
        padding: {
            right: '400px'
        },
        gap: '38px',
        pagination: false,
        classes: {
            arrows: 'splide__arrows ',
            arrow: 'splide__arrow ',
            prev: 'splide__arrow--prev ',
            next: 'splide__arrow--next ',
        },
        breakpoints: {
            550: {
                perPage: 1,
                perMove: 1,
                padding: {
                    right: '200px'
                },
                gap: '15px',
            },
            768: {
                perPage: 1,
                perMove: 1,
                padding: {
                    right: '300px'
                },
                gap: '28px',
            }
        }
    };

    return (
        <section className="project-section">
            <div className="container">
                <div className="project-section__title">
                    <Title subTitle="Project" title="Latest works" />
                </div>
                <div className="project-section__content">
                    <Splide options={splideOptions} renderControls={() => (
                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev">
                                <span className="icon-arrow-left"></span>
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <span className="icon-arrow-right"></span>
                            </button>
                        </div>
                    )}>

                        {listItem}
                    </Splide>
                </div>
            </div>
        </section>
    );
};

function Item(props) {
    return (
        <SplideSlide>
            <div className="item">
                <div className="item__image">
                    <Link to={props.link}>
                        <img src={props.image} alt={props.title} />
                    </Link>
                </div>
                <h3 className="item__sub-title">{props.subTitle}</h3>
                <h2 className="item__title"><Link to={props.link}>{props.title}</Link></h2>
                <p className="item__description">{props.description}</p>
            </div>
        </SplideSlide>
    );
}

export default ProjectSection;

