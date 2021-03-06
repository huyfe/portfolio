import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Title from '../Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

FeedBack.propTypes = {

};

function FeedBack(props) {

    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(!modal);
    }

    let itemArray = [
        {
            name: "Jay Gray",
            comment: "“Great work! We had a challenging design and Huy Junior completed it successfully. Also, he is very responsive. Overall, I am happy with the outcome.”",
            link: "https://google.com",
            avatar: "https://image.thanhnien.vn/1024/uploaded/nthanhluan/2015_11_18/anonymous-image_fgnd.jpg"
        },
        {
            name: "Alice",
            comment: "Wao! He is good man. Also, he is very responsive. Overall, I am happy with the outcome.”",
            link: "https://google.com",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRar9_7AALlR-ZTpH0LW9JKiOBE3QeqnnGhBJuUDQ4VKBXJGmy6oVYvdWh1BNZDyKZBvd0&usqp=CAU"
        },
        {
            name: "Bill Gates",
            comment: "“Great work! We had a challenging design and Junior completed it successfully. Also, he is very responsive. Overall, I am happy with the outcome.”",
            link: "https://google.com",
            avatar: "https://vnn-imgs-f.vgcloud.vn/2021/05/04/16/bill-gates-giau-co-nao-1.jpg"
        },
        {
            name: "Neymar Junior",
            link: "https://google.com",
            comment: "“This is my great fan. He see me a his idol”",
            avatar: "https://www.fcbarcelonanoticias.com/uploads/s1/25/47/49/neymartop-254749.jpeg"
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
                                <button onClick={showModal}>Comment</button>
                                <button>See More Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={modal ? "feedback-section__modal overlay" : "feedback-section__modal"}>
                <div className={modal ? "wrap animate__fadeInDown" : "wrap"}>
                    <div className="row mb-lg-4 mb-2">
                        <div className="col-12 text-center">
                            <h4>Comment</h4>
                        </div>
                    </div>
                    <div className="child row">
                        <div className="col-lg-2 col-12">
                            <div className="icon">
                                <span className="d-lg-none d-block">Avatar</span>
                                <img src="./images/user.svg" alt="Image" className="img-fluid d-lg-block d-none" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="control">
                                <input type="text" className="form-control" placeholder="Image url" />
                            </div>
                        </div>
                    </div>
                    <div className="child row">
                        <div className="col-lg-2">
                            <div className="icon">
                                <span className="d-lg-none d-block">Name</span>
                                <img src="./images/identity.svg" alt="Image" className="img-fluid d-lg-block d-none" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="control">
                                <input type="text" className="form-control" placeholder="Your name" />
                            </div>
                        </div>
                    </div>
                    <div className="child row">
                        <div className="col-lg-2">
                            <div className="icon">
                                <p className="d-lg-none d-block">Comments</p>
                                <img src="./images/comments.svg" alt="Image" className="img-fluid d-lg-block d-none" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="control">
                                <textarea rows="4" type="text" className="form-control" placeholder="Your comment" />
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={showModal}>Cancel</button>
                        <button>Comment</button>
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