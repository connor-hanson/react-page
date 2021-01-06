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
       top: nextY + 1,
        left: 0,
        behavior: 'smooth'
      });
  }

  render() {
    return (
      <div className="scroll-arrow" onClick={() => this.handleClick(this.props.nextY)}>
          <img width="32" 
          alt="Arrow-down" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/512px-Arrow-down.svg.png"/>
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
    this.switchToRef = React.createRef();
  }

  render() {
    return (
      <div className="intro-page">
        <p>Some Intro</p>

        <DownArrow />
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
  </div>
  );
}

export default App;
