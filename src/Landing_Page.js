import logo from './images/logo.svg';
import './styles/App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import DownArrow from './utils/Bottom_Nav';
import NavBar from './utils/navBar'
import PortfolioPage from './Portfolio'; 

var React = require('react');

class TypedText extends React.Component {
    constructor(props) {
      super(props);
  
      // TODO: replace words
      this.state = {
        animate: false,
        currText:"L",
        //finalText: "Web Developer.\nComputer Science Major.\nFrench Minor.",
        finalText: "Connor Hanson:?Web Developer.?Computer Scientist.?",
        charCounter: 0,
        shouldRender: this.props.shouldRender
      }
    }
  
    // begin animation when component loads to DOM
    componentDidMount() {

        if (this.state.shouldRender) {
            setTimeout(() => {
                this.animateTextAndBar();
              }, 2000);
        }  
    }
  
  
    // TODO animate typing bar
    // TODO npm install react-router-dom
    animateTextAndBar() {
  
      let finalText = this.state.finalText;
      let charCounter = this.state.charCounter;
      let element = document.getElementById('typing-text');
      var newChar;
      
  
      requestAnimationFrame( function animate() {
        setTimeout(() => {
  
          newChar = finalText.charAt(charCounter);
          
          // controls typing speed
          setTimeout(() => {
            // prevent crash when exiting page too soon
            if (!element) {
                return;
            }

            let cursor = document.getElementById("type-cursor");
            if (newChar !== '?') {
              if (cursor) {
                cursor.parentElement.removeChild(cursor);
                element.innerHTML += newChar;
                element.appendChild(cursor);
              } else {
                element.innerHTML += newChar;
              }
            }
            
            charCounter += 1;
  
            // wait a few seconds
            if (newChar === '?' && charCounter < finalText.length) {
              setTimeout(() => {
                element.innerHTML += '<br/>';
                requestAnimationFrame(animate);
  
              }, 500); // pause 2 seconds between lines
            }
            else if (charCounter < finalText.length) {
              if (newChar === ' ') {
                setTimeout(() => {
                  requestAnimationFrame(animate);
                }, 120);
              } else {
                requestAnimationFrame(animate);
              }
            }
          }, 60);
        }, Math.floor(Math.random() * 10) * 5); // end timeout function
      
      }); // end animate function
    }
  
    render() {
      return (
        <div id="typing-text-container">
          <h1 id="typing-text"><span id="type-cursor">|</span></h1>
        </div>
      );
    }
  }
  
  // Landing Page
class Landing extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        topY: 0,
        bottomY: window.innerHeight, 
        isLoaded: true
      }
    }
  
    onClickAboutMe() {
      return "";
    }
  
    onClickProjects() {
      return"";
    }
  
    onClickContactMe() {
      return"";
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }

    componedWillUnMount() {
        this.setState({
            isLoaded: false
        });
    }
  
    render() {
        if (this.state.isLoaded) {
            return (
                <header className="App-header">

                    {/* <div className="navbar">
                        <div className="navbar-first col-4">
                            <Link to="/home">Home</Link>
                        </div>
                        <div className="navbar-first col-4">
                            <Link to="/about">About Me</Link>
                            <a>About Me</a>
                        </div>
                        <div className="navbar-first col-4">
                            <Link to="/portfolio">Portfolio</Link>
                        </div>
                        <div className="navbar-first col-4">
                            <Link to="Contact">Contact Me</Link>
                            <a>Contact Me</a>
                        </div>
                    </div> */}

                    <NavBar />
        
        
                    {/* <h1>Connor Hanson</h1> */}
                    <TypedText shouldRender={this.state.isLoaded}/>
        
                    {/* TODO: programatically adjust size based on screen size*/ }
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
        
                    {/* <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Hello, I'm Connor. nice to meet you.
                    </p> */}
        
                    {/* <DownArrow nextY={this.state.bottomY}/> */}
        
                </header>
            );
        }
    }
}

export default Landing;