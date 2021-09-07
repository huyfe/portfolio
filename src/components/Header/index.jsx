import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {

    const [toggleMenu, setToggleMenu] = useState(false);

    const menuItem = [
        {
            link: "/about",
            title: "About"
        },
        {
            link: "/projects",
            title: "Projects"
        },
        {
            link: "/services",
            title: "Services"
        },
    ];

    const menu = menuItem.map(item => {
        return (
            <li key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
            </li>
        )
    })

    const showMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <>
            <header className="header ">
                <div className="container">
                    <div className={toggleMenu ? "header__top-nav is-open" : "header__top-nav"}>
                        <div className="header__wrap-logo">
                            <div className="header__logo">
                                <Link to="/" exact="true"><img src="./logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className={toggleMenu ? "header__wrap-btn is-open" : "header__wrap-btn"} >
                            <button onClick={showMenu} id="btnMenu">
                                <span className="icon-line"></span>
                                <span className="icon-line"></span>
                                <span className="icon-line"></span>
                            </button>
                        </div>
                        <div onClick={showMenu} className={toggleMenu ? "fade-blur is-open" : "fade-blur"}></div>
                        <div className={toggleMenu ? "header__wrap-menu is-open" : "header__wrap-menu"}>
                            <ul className="header__menu d-flex flex-md-row flex-column">
                                <li><NavLink to="/">Home</NavLink></li>
                                {menu}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;