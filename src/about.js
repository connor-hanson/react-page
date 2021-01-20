import logo from './images/logo.svg';
import './styles/about.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import Landing from './Landing_Page';
  import BackgroundCanvas from './utils/background_canvas'
  import NavBar from './utils/navBar';
  import ContactColumn from './utils/contactColumn';

  var React = require('react');


  class AboutPage extends React.Component {

    render() {
        return (
            <div className="container">
                <BackgroundCanvas />
                <NavBar />
                <ContactColumn />

                <div className="content">

                    <div className="row">
                        <div className="col-3">
                            <div className="inner-col">
                                <h2>Front-End</h2>
                                <p>
                                    I enjoy bringing my own, as well other people's visions, to life on a screen.
                                </p>
                            </div>
                            
                        </div>

                        <div className="col-3">
                            <div className="inner-col">
                                <h3>
                                JavaScript<br/>
                                C++<br/>
                                C<br/>
                                Java<br/>
                                Python<br/>
                                PHP<br/>
                                CSS<br/>
                                French<br/>
                                </h3>
                           </div>
                        </div>

                        <div className="col-3">
                            <div className="inner-col">
                                <h2>Back-End</h2>
                                <p>I enjoy bringing my own, as well other people's visions, to life on a screen.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="inner-col">
                            <h2>Work Experience</h2>
                            <div className="col-2">
                                
                                <h4>IceCube Neutrino Laboratory</h4>
                                <p>Here I have created a front end website for the 'file catalog' that WIPAC stores their test data in. It allows for users to do an advanced search for a specific file, providing data such as the file date, file name, or processing level.</p>
                            </div>
                            <div className="col-2">
                                <h4>Aquatic Sciences Center</h4>
                                <p>This job is primarily a front-end job, where I both build and update webpages using PHP and WordPress as the Content Management System. Here, I have gained experience in using JQuery, styling webpages, and learned PHP from scratch.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
  }


  export default AboutPage;