import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';

Header.propTypes = {

};

function Header(props) {
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

    return (
        <>
            <header className="header container">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <div className="header__logo">
                            <Link to="/" exact="true"><img src="./logo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-auto d-lg-none d-md-block d-xs-block">
                        <button>
                            Menu
                        </button>
                    </div>
                    <div className="col-auto ms-auto">
                        <ul className="header__menu d-flex flex-lg-row flex-md-column flex-column">
                            <li><NavLink to="/">Home</NavLink></li>
                            {menu}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;