import '../styles/utils.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

var React = require('react');

class ContactColumn extends React.Component {
    render() {
        return (
            <div className="contact-column">
                <Link to="/contact">
                <div className="contact-bubble">
                    
                    <a >
                    <img width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/Aiga_mail_inverted_nobg.svg"></img>
                    </a>
                </div>
                </Link>

                <div className="contact-bubble">
                    <a href="https://www.linkedin.com/in/connor-hanson-134b4419b">
                    <img width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8f/LinkedIn_font_awesome.svg"></img>
                    </a>
                </div>
                <div className="contact-bubble">
                    <a href="https://github.com/connor-hanson">
                    <img width="32"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img>
                    </a>
                </div>

            </div>
        );
    }
}

export default ContactColumn;