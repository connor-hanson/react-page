import cnn_logo from '../images/CNN-img.png';

var React = require('react');

class Main_Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    show() {
        this.setState({
            display: true
        })
    }

    hide() {
        this.setState({
            display: false
        })
    }

    render() {
        return "";
    }
}

// display inside main screen
class CNN_Display extends Main_Display {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.state.display) {
            return "";
        }
        return (
            <div id="cnn-display">
                <div className="project-header row">
                    <div className="project-header-img">
                        <img src={cnn_logo} alt="Neural Network Project"></img>
                    </div>
                    <div className="project-header-info">
                        <h2>Convolutional Neural Networks Project</h2>
                        <h4>Final Project - CS 532, Matrix Methods in Machine Learning</h4>
                        <div className="link-container">
                            <a className="project-link"
                            href="https://github.com/connor-hanson/532_Final">See it on GitHub</a>
                        </div>
                    </div>
                </div>
                
                <div className="project-desc row">
                    <h3>Description</h3>
                    <p>Won second place in class competition. An end-of-semester team project where we were tasked with 
                        building an activity similar to the ones given to us in class, but on a topic which we have not 
                        yet covered. This project has both a coding section and a write-up/activity problem section.</p>
                    <p>We chose to write our project based on CNNs and ranked second place in the class project
                        competition, placing us on the ECE 532 website. In general, CNNs are written using a library
                        such as TensorFlow or Pandas, but with this project we had to understand the underlying math 
                        of a CNN and what causes them to work.</p>
                </div>
            </div>
        );
    }
}

class MakeProgram_Display extends Main_Display {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.state.display) {
            return "";
        }
        return (
            <div id="cnn-display">
                <div className="project-header row">
                    <div className="project-header-img">
                        <img src={cnn_logo} alt="Neural Network Project"></img>
                    </div>
                    <div className="project-header-info">
                        <h2>537 Make</h2>
                        <h4>p3 - CS 537, Operating Systems</h4>
                        <div className="link-container">
                            <a className="project-link"
                            href="https://github.com/connor-hanson/p3">See it on GitHub</a>
                        </div>
                    </div>
                </div>
                
                <div className="project-desc row">
                    <h3>Description</h3>
                    <p>Built a simplified copy of the make program. The program parses a makefile provided by the user,
                        building a dependency graph from the parsed info. After doing this, the make program runs 
                        the commands provided by each target in the order in which the dependency graph was built - 
                        creating an executable on a default run. 
                    </p>
                    <p>
                        If the user provides a starting point, the 
                        program will begin building the dependency graph from that specified point. If none is provided, 
                        the program builds a dependency graph from the first depenency in the makefile. 
                    </p>
                    <p>
                        The program also has the ability to build itself, which I think is pretty neat.
                    </p>
                </div>
            </div>
        );
    }
}

class SocialNetwork_Display extends Main_Display {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.state.display) {
            return "";
        }

        return (
            <div id="cnn-display">
                <div className="project-header row">
                    <div className="project-header-img">
                        <img src={cnn_logo} alt="Neural Network Project"></img>
                    </div>
                    <div className="project-header-info">
                        <h2>Social Network 4000</h2>
                        <h4>Final Project - CS 400, Programming III</h4>
                        <div className="link-container">
                            <a className="project-link"
                            href="https://github.com/connor-hanson/Social_Network_4000">See it on GitHub</a>
                        </div>
                    </div>
                </div>
                
                <div className="project-desc row">
                    <h3>Description</h3>
                    <p> CS 400 final project. Worked with a team of 4 other students to create a GUI application using
                        JavaFX. The project goal was to become familiar with creating project mockups, using version
                        control, and learning Java's graphical libraries to create a small application. 
                    </p>
                    <p>
                        The application is meant to simulate an 'offline social network' where users can create accounts,
                        manage friends, see friend lists, and nuke the whole network.
                    </p>
                </div>
            </div>
        );
    }
}

class Graphicsp4_Display extends Main_Display {
    constructor(props) {
        super(props);
    }
        
    render() {
        if (!this.state.display) {
            return "";
        }

        return (
            <div id="cnn-display">
                <div className="project-header row">
                    <div className="project-header-img">
                        <img src={cnn_logo} alt="Neural Network Project"></img>
                    </div>
                    <div className="project-header-info">
                        <h2>3D Graphics Project</h2>
                        <h4>P7 - CS 559, Graphics</h4>
                        <div className="link-container">
                            <a className="project-link"
                            href="https://github.com/connor-hanson/cs559/tree/master/p7_v2">See it on GitHub</a>
                        </div>
                    </div>
                </div>
                
                <div className="project-desc row">
                    <h3>Description</h3>
                    <p> 
                        Final Project for graphics. The goal was to build a simple object in a 3D view using OpenGL.
                    </p>
                    <p>
                        I built a 'cigarette carton' which could be opened and closed, and which had 2 different types 
                        of shaders applied to its faces. On some faces, I modified a Perlin Noise function to give a 
                        'tv static' shader effect on its sides, and on the remaining faces, I used Blinn-Phong shading 
                        to give it a nice shiny effect. 
                    </p>
                </div>
            </div>
        );
    }
}

class IceCubeSite_Display extends Main_Display {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.state.display) {
            return "";
        }

        return (
            <div id="cnn-display">
                <div className="project-header row">
                    <div className="project-header-img">
                        <img src={cnn_logo} alt="Neural Network Project"></img>
                    </div>
                    <div className="project-header-info">
                        <h2>Web File Catalog</h2>
                        <h4>Work Project</h4>
                        <div className="link-container">
                            <a className="project-link"
                            href="https://file-catalog.icecube.wisc.edu/">View Site</a>
                        </div>
                    </div>
                </div>
                
                <div className="project-desc row">
                    <h3>Description</h3>
                    <p> 
                        This website was built to provide a front end to the file catalog API that the WIPAC organization
                        currently uses.
                    </p>
                    <p>
                        This site includes functionality such as advanced searches, paginating search results, and getting
                        file meta data from the API. It was developed using Python's Flask library to request search data from
                        the REST API in the backend. 
                    </p>
                </div>
            </div>
        );
    }
}

function SortingVisualizer_Display() {

}

// specific hardcoded carousel
// rotate contents by modifying which component id is main screen in css
class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.incDisplay = this.incDisplay.bind(this);
        this.update = this.update.bind(this);
        this.updateMainScreen = this.updateMainScreen.bind(this);
        this.hideAll = this.hideAll.bind(this);
        this.switchtoCNN = this.switchtoCNN.bind(this);
        this.switchToIceCube = this.switchToIceCube.bind(this);
        this.switchTo = this.switchTo.bind(this);
        this.highlightSelected = this.highlightSelected.bind(this);

        this.state = {
            intervalID: null,
            currDisplay: 0, // which element to display
            numElements: 5,
        }

        this.cnnElement = React.createRef();
        this.iceCubeElement = React.createRef();
        this.makeElement = React.createRef();
        this.socialElement = React.createRef();
        this.graphicsElement = React.createRef();
    }

    updateMainScreen(carouselElements) {
        var mainScreen = document.getElementById('carousel-focus');
        mainScreen.innerHTML = carouselElements[this.state.currDisplay].innerHTML;
    }

    highlightSelected(elementNum) {
        var carouselElements = document.getElementsByClassName('carousel-content');

        for (var i = 0; i < this.state.numElements; ++i) {
            carouselElements[i].id = "";
        }

        // set id of current element
        carouselElements[elementNum].id = "selected-carousel";

        

        // update what is displayed in main screen
        //this.updateMainScreen(carouselElements);
        
    }

    incDisplay() {
        this.highlightSelected(this.state.currDisplay);

        this.switchTo(this.state.currDisplay);


        // increment counter
        if (this.state.currDisplay === this.state.numElements - 1) {
            this.setState({
                currDisplay: 0,
            });
            //this.switchTo(this.state.currDisplay);
        } else {
            this.setState({
                currDisplay: (this.state.currDisplay+1),
            });
            //this.switchTo(this.state.currDisplay);
        }
    }

    update() {
        
        this.incDisplay();
        var self = this;
        // set timer and id for later taking down timer
        var id = setInterval(function() {
            self.incDisplay(); // 'this' no longer works inside nested function
        }, 7000);

        this.setState({
            intervalID: id
        });

    }

    switchtoCNN = ()=> {
        this.hideAll();
        this.cnnElement.current.show();
        this.setState({
            currDisplay: 0,
        });
        this.highlightSelected(0);
    }

    switchToIceCube = () => {
        this.hideAll();
        this.iceCubeElement.current.show();
        this.setState({
            currDisplay: 1,
        });
        this.highlightSelected(1);
    }

    switchToMake = () => {
        this.hideAll();
        this.makeElement.current.show();
        this.setState({
            currDisplay: 2,
        });
        this.highlightSelected(2);
    }

    switchToSocial = () => {
        this.hideAll();
        this.socialElement.current.show();
        this.setState({
            currDisplay: 3,
        });
        this.highlightSelected(3);
    }

    switchToGraphics = () => {
        this.hideAll();
        this.graphicsElement.current.show();
        this.setState({
            currDisplay: 4,
        });
        this.highlightSelected(4);
    }

    switchTo(elementNum) {

        //var elementNum = 0;
        switch(elementNum) {
            case 0: 
                this.switchtoCNN();
                break;
            case 1:
                this.switchToIceCube();
                break;
            case 2: 
                this.switchToMake();
                break;
            case 3:
                this.switchToSocial();
                break;
            case 4:
                this.switchToGraphics();
                break;
            default:
                this.switchtoCNN();
                break;
        }
    }

    // hide all components
    hideAll() {
        this.cnnElement.current.hide();
        this.iceCubeElement.current.hide();
        this.makeElement.current.hide();
        this.socialElement.current.hide();
        this.graphicsElement.current.hide();
    }

    componentDidMount() {
        this.update();   
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
        this.setState({
            intervalID: null,
            currDisplay: 0,
            numElements: 5
        });
    }

    render() {
        return (
            <div className="carousel-container">
                    
                <div id="carousel-focus">
                    
                    <CNN_Display ref={this.cnnElement} />
                    <MakeProgram_Display ref={this.makeElement}/>
                    <SocialNetwork_Display ref={this.socialElement}/>
                    <Graphicsp4_Display ref={this.graphicsElement}/>
                    <IceCubeSite_Display ref={this.iceCubeElement}/>
                </div>

                <div className="carousel-items">
                
                    <div className="carousel-content" onClick={
                        //console.log('kill me')
                        this.switchtoCNN
                        
                    }>
                        {/* <img src={cnn_logo} alt="Neural Network Project" height="50" width="50"></img> */}
                        Neural Network
                    </div>

                    <div className="carousel-content" onClick={
                            //console.log('kill me')
                            //this.switchViews(this.iceCubeElement.current)
                            this.switchToIceCube
                        
                    }>
                        WIPAC Web File Catalog
                    </div>

                    <div className="carousel-content" onClick={
                            this.switchToMake
                        
                    }>
                        MakeProgram
                    </div>

                    <div className="carousel-content" onClick={
                        this.switchToSocial
                    }>
                        Social Network 4000
                    </div>

                    <div className="carousel-content" onClick={
                        this.switchToGraphics
                    }>
                        OpenGL program
                    </div>
                </div>
            </div>
        );
    }
}


export default Carousel;