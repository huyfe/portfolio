import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

// Import Component 
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';
import Footer from '../components/Footer';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <main className="page home-page container">
            <Route path="/" exact component={Header} />
            <Route path="/" exact component={HeroSection} />
            <Route path="/" exact component={AboutSection} />
            <Route path="/" exact component={ProjectSection} />
            <Route path="/" exact component={ServiceSection} />
            <Route path="/" exact component={Footer} />
        </main>
    );
}

export default HomePage;