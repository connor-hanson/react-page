import logo from './images/logo.svg';
import './styles/App.css';

import PortfolioPage from './Portfolio';
import AboutPage from './about';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Landing from './Landing_Page'
import DownArrow from './utils/Bottom_Nav'

var React = require('react');

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.handleCard1Click = this.handleCard1Click.bind(this);
    this.handleCard2Click = this.handleCard2Click.bind(this);
    this.handleCard3Click = this.handleCard3Click.bind(this);
    this.handleCardExit = this.handleCardExit.bind(this);

    this.state = {
      topY: 0,
      bottomY: 2*window.innerHeight,
      isBlurred: false,
      ExpandableCard1Visible: false,
      ExpandableCard2Visible: false,
      ExpandableCard3Visible: false
    }
  }

  // handle opening and closing cards
  handleCard1Click() {
    this.setState({
      isBlurred:true,
      ExpandableCard1Visible: true
    });
    document.getElementById("blur-content").style.filter = "blur(5px)";
    document.getElementById("ex-card-1").style.display = "block";
  }

  handleCard2Click() {
    this.setState({
      isBlurred:true,
      ExpandableCard2Visible: true
    });
    document.getElementById("blur-content").style.filter = "blur(5px)";
    document.getElementById("ex-card-2").style.display = "block";
  }

  handleCard3Click() {
    this.setState({
      isBlurred:true,
      ExpandableCard3Visible: true
    });
    document.getElementById("blur-content").style.filter = "blur(5px)";
    document.getElementById("ex-card-3").style.display = "block";
    document.getElementById("ex-card-3").style.margin = "auto";
  }

  handleCardExit() {
    if (this.state.isBlurred) {
      this.setState({
        isBlurred: false,
        ExpandableCard1Visible: false,
        ExpandableCard2Visible: false,
        ExpandableCard3Visible: false
      });
      document.getElementById("blur-content").style.filter = "none";
      let hiddenCards = document.getElementsByClassName("expanded-card");

      // hide all cards again, so we don't need to know which is open
      for (var i = 0; i < hiddenCards.length; ++i) {
        hiddenCards[i].style.display = "none";
      }
    }
  }

  render() {
    return (
      <div className="intro-page" onClick={this.handleCardExit}>

        <div id="blur-content">
          <h1>About Me</h1>

          <p>Computer Science is my degree, but design is my <i>passione</i></p>
          <div className="row">
            <div className="col-3">
              <div className="clickable-card" onClick={this.handleCard1Click}>
                <h3>Languages and Skills!</h3>

                <p>I know C, C++idmnsxzopdxs
                  iukj,dmcszds

                  ebdhskjnaxdes
                  poppuhijdesxddcsib
                  deslladfdsassfewsaxz
                  uvhkjfdsaqdfvrgfedwsz
                  uhkjl;[pfedsxwdfreds]
                </p>
              </div>
            </div>

            <div className="col-3">
              <div className="clickable-card" onClick={this.handleCard2Click}>
                <h3>Work Experience</h3>
                <p>Pop</p>
              </div>
            </div>

            <div className="col-3">
              <div className="clickable-card" onClick={this.handleCard3Click}>
                <h3>Hobbies 'n Things</h3>
                <p>yuh</p>
              </div>
            </div>
          </div>
        </div>


        <div className="expanded-card" id="ex-card-1">Expand Dong 1</div>
        <div className="expanded-card" id="ex-card-2">Expand Dong 2</div>
        <div className="expanded-card" id="ex-card-3">Expand Dong 3</div>


        <DownArrow nextY={this.state.bottomY}/>
      </div>
    );
  }
}

// menu displaying areas to nav to
class DropMenu extends React.Component {
  render() {
    return "";
  }
}



function App() {
  return (
  <div className="App">
    <Router>
      
      <Switch>
        <Route path="/home"><Landing /></Route>
        <Route path="/about"><AboutPage /></Route>
        <Route path="/portfolio"><PortfolioPage /></Route>
        <Route path="/contact"><Landing /></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
