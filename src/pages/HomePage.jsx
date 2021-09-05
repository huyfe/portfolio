import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

// Import Component 
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';
import FeedBackSection from '../components/FeedBackSection';
import Footer from '../components/Footer';
import Spacing from '../components/Spacing';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <main className="page home-page container-fluid px-0">
            <Route path="/" exact component={Header} />
            <Route path="/" exact component={HeroSection} />
            <Route path="/" exact component={AboutSection} />
            <Route path="/" exact component={() => <Spacing dH="100px" tH="70px" mH="50px" />} />
            <Route path="/" exact component={ProjectSection} />
            <Route path="/" exact component={() => <Spacing dH="100px" tH="70px" mH="50px" />} />
            <Route path="/" exact component={ServiceSection} />
            <Route path="/" exact component={FeedBackSection} />
            <Route path="/" exact component={Footer} />
        </main>
    );
}

export default HomePage;