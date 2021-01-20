import logo from './images/logo.svg';
import './styles/portfolio.css';

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
  import Carousel from './utils/carousel';

  var React = require('react');


  class PortfolioPage extends React.Component {

    constructor(props) {
      super(props);

    }

    render() {
        return (
            <div className="container">
                <BackgroundCanvas />
                <NavBar />
                <ContactColumn />

              <div className="row">
                
                <Carousel />

                {/* <h1>Projects</h1>
                <div className="col-2">
                  <div className="clickable-card" id="CNN">
                    Convolutional Neural Networks: Overview and Applications
                  </div>

                  <div className="clickable-card" id="537make">
                    537make
                  </div>
                  
                </div>

                <div className="col-2">
                  <div className="clickable-card">
                    Graphics Projects and Shaders
                  </div>

                  <div className="clickable-card">
                    IceCube Web File Catalog
                  </div>
                </div> */}
                  
                
              </div>
                
            </div>
        );
    }
  }


  export default PortfolioPage;