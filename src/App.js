import logo from './logo.svg';
import './App.css';

var React = require('react');

class DownArrow extends React.Component {
  // props contains what we scroll to
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // move down to next slide
  handleClick(nextY) {
    window.scroll({
       top: nextY,
        left: 0,
        behavior: 'smooth'
      });
  }

  render() {
    return (
      <div className="scroll-arrow" onClick={() => this.handleClick(this.props.nextY)}>
          <img width="32" 
          alt="Arrow-down" 
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/White_arrow_down.svg"/>
      </div>
    );
  }
}

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topY: 0,
      bottomY: window.innerHeight
    }
  }

  render() {
    return (
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, I'm Connor. nice to meet you.
          </p>
  
          <DownArrow nextY={this.state.bottomY}/>
  
        </header>
    );
  }
}

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
    // document.getElementById("blur-content").style.filter = "blur(5px)";
    // document.getElementById("ex-card-1").style.display = "block";
  }

  handleCard2Click() {
    this.setState({
      isBlurred:true,
      ExpandableCard2Visible: true
    });
    // document.getElementById("blur-content").style.filter = "blur(5px)";
    // document.getElementById("ex-card-2").style.display = "block";
  }

  handleCard3Click() {
    this.setState({
      isBlurred:true,
      ExpandableCard3Visible: true
    });
    // document.getElementById("blur-content").style.filter = "blur(5px)";
    // document.getElementById("ex-card-3").style.display = "block";
    // document.getElementById("ex-card-3").style.margin = "auto";
  }

  handleCardExit() {
    if (this.state.isBlurred) {
      this.setState({
        isBlurred: false,
        ExpandableCard1Visible: false,
        ExpandableCard2Visible: false,
        ExpandableCard3Visible: false
      });
      //document.getElementById("blur-content").style.filter = "none";
      let hiddenCards = document.getElementsByClassName("expanded-card");

      // hide all cards again, so we don't need to know which is open
      for (var i = 0; i < hiddenCards.length; ++i) {
        //hiddenCards[i].style.display = "none";
      }
    }
  }

  render() {
    return (
      <div className="intro-page" onClick={this.handleCardExit}>

        <div id="blur-content">
          <h1>About Me</h1>
          <p>UW Madison senior graduting with a CS major and a French certificate. I am a talented programmer with experience in a variety of languages (C, C++, Java, JS, Python, PHP, CSS, HTML) and frameworks/templating languages (React.js, Jinja2, Flask, HTML). I am a developer who likes developing both solo projects (complete freedom!!) as well as working with one or more other developers (Brings out my strengths and makes me a better dev).</p>
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
                <p>heroin</p>
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

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-page">
        <p>My Projects</p>
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
    <Welcome />
    <Intro />
    <Projects />
  </div>
  );
}

export default App;
