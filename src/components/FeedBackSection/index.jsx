import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Title from '../Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

FeedBack.propTypes = {

};

function FeedBack(props) {

    let itemArray = [
        {
            name: "Jay Gray",
            comment: "“Great work! We had a challenging design and Hani completed it successfully. Also, he is very responsive. Overall, I am happy with the outcome.”",
            link: "https://google.com",
            avatar: "./images/avatar.svg"
        },
        {
            name: "Jay Gray",
            comment: "“Great work! We had a challenging design and Hani completed it successfully. Also, he is very responsive. Overall, I am happy with the outcome.”",
            link: "https://google.com",
            avatar: "https://cdn.tgdd.vn//GameApp/-1//top-7-phan-mem-thiet-ke-trang-web-website-chuyen-nghiep-cho-thumb-800x450.jpg"
        },
        {
            name: "Jay Gray",
            comment: "“Great work! We had a challenging design and Hani completed it successfully. Also, he is very responsive. Overall, I am happy with the outcome.”",
            link: "https://google.com",
            avatar: "https://cdn.tgdd.vn//GameApp/-1//top-7-phan-mem-thiet-ke-trang-web-website-chuyen-nghiep-cho-thumb-800x450.jpg"
        },
        {
            name: "Jay Gray",
            link: "https://google.com",
            comment: "“Great work! We had a challenging design and Hani completed it successfully. Also, he is very responsive. Overall, I am happy with the outcome.”",
            avatar: "https://cdn.tgdd.vn//GameApp/-1//top-7-phan-mem-thiet-ke-trang-web-website-chuyen-nghiep-cho-thumb-800x450.jpg"
        }
    ];

    let listItem = itemArray.map(item => {
        return <Item name={item.name} comment={item.comment} link={item.link} avatar={item.avatar} />
    })

    const splideOptions = {
        type: 'slide',
        perPage: 1,
        perMove: 1,
        pagination: true,
        classes: {
            arrows: 'splide__arrows ',
            arrow: 'splide__arrow ',
            prev: 'splide__arrow--prev ',
            next: 'splide__arrow--next ',
        },
    };

    return (
        <section className="feedback-section">
            <div className="container">
                <div className="feedback-section__content">
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

                    <div className="row">
                        <div className="feedback-section__control">
                            <h3>Leave a comment?</h3>
                            <div className="feedback-section__button">
                                <button>Comment</button>
                                <button>See More Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Item(props) {
    return (
        <SplideSlide>
            <div className="item">
                <div className="item__avatar">
                    <Link to={props.link}>
                        <img className="img-fluid" src={props.avatar} alt={props.name} />
                    </Link>
                </div>
                <p className="item__comment">{props.comment}</p>
                <h2 className="item__name"><Link to={props.link}>{props.name}</Link></h2>
            </div>
        </SplideSlide>
    );
}

export default FeedBack;