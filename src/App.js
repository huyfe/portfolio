import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

// Import Page Component
import HomePage from './pages/HomePage';

function App() {
  const [removeAnim, setRemoveAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRemoveAnim(true);
    }, 3500);
  });
  return (
    <>
      <div className={!removeAnim ? "loading" : "loading loaded"}>
        <div className="progress"></div>
      </div>
      <Route path="/" component={Header} />
      <Switch>
        {removeAnim && <Route path="/" exact component={HomePage} />}
      </Switch>
      <Route path="/" component={Footer} />
    </>
  );
}

export default App;
