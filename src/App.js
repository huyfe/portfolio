import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

// Import Page Component
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
