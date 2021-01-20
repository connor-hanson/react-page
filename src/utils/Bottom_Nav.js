import '../styles/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


var React = require('react');

class Bottom_Nav extends React.Component {

  constructor(props) {
    super(props);

    this.clickUp = this.clickUp.bind(this);
    this.clickDown = this.clickDown.bind(this);
    this.clickTo = this.clickTo.bind(this);
  }

  clickUp(nextPage) {

  }

  clickDown(prevPage) {

  }

  // pageNum || pageRef
  clickTo(pageNum) {

  }

  render() {
    return (
      <div className="bottom-nav">
        <div className="arrow-up"></div>
        <div className="nav-bubble"></div>
        <div className="nav-bubble"></div>
        <div className="nav-bubble"></div>
        <div className="arrow-down"></div>
      </div>
    );
  }
}

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



  export default DownArrow;