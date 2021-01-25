import '../styles/utils.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const React = require('react');

class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
            <div className="navbar-first col-4">
                <Link to="/react-page">Home</Link>
            </div>
            <div className="navbar-first col-4">
                <Link to="/about">About Me</Link>
            </div>
            <div className="navbar-first col-4">
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="navbar-first col-4">
                <Link to="/contact">Contact Me</Link>
            </div>
        </div>
        );
    }
}

export default NavBar;