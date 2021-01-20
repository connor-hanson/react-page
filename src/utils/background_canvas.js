// Contains a canvas which 'can' cover the screen and which uses shaders to
// show a slow moving display of small dots

var React = require('react');


class BackgroundCanvas extends React.Component {

    componentDidMount() {
        animatePage();
    }

    render() {
        return (
            <canvas id="background-canvas"></canvas>
        );
    }
}



// basic canvas/drawing stuff
// used shader program setup template from webgl2fundamentals
function animatePage() {

    //'use strict';
    const gl = document.getElementById('background-canvas').getContext('webgl2');

    const vs = `#version 300 es
        uniform int numVerts;
        uniform float time;
        out float u; // if 1, discard fragment
        //out float alpha;

        // hash function from https://www.shadertoy.com/view/4djSRW
        // given a value between 0 and 1
        // returns a value between 0 and 1 that *appears* kind of random
        float hash(float p) {
            vec2 p2 = fract(vec2(p * 5.3983, p * 5.4427));
            p2 += dot(p2.yx, p2.xy + vec2(21.5351, 14.3137));
            return fract(p2.x * p2.y * 95.4337);
        }

        void main() {
            float mod_time = time*0.02;
            u = float(gl_VertexID) / float(numVerts);  // goes from 0 to 1
            float x = hash(u) * 2.0 - 1.0;                   // random position
            float y = fract(mod_time + u)*2.0 -1.0;    

            u = hash(x + y);
            //alpha = cos(y) * 5.0;
            gl_Position = vec4(x, y, 0, 1);
            gl_PointSize = 3.0;
        }
    `;

    const fs = `#version 300 es
        precision highp float;
        uniform vec2 screenDim;
        //in float u;
        //in float alpha;

        out vec4 outColor;

        void main() {


            float relative_pos = normalize(gl_FragCoord.x / screenDim.y);
           
            
            float alpha = cos(relative_pos*(1.0));
            outColor = vec4(alpha, alpha, alpha, 1.0);
        }
    
    `;

    function createShader(gl, shaderType, shaderSrc) {
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, shaderSrc);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        } else {
            return shader;
        }
    }

    // attach shaders and link
    function createProgram(gl, vShader, fShader) {
        var shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vShader);
        gl.attachShader(shaderProgram, fShader);
        gl.linkProgram(shaderProgram);
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert("Error initializing shaders");
        } else {
            gl.useProgram(shaderProgram);
            return shaderProgram;
        }
    }

    // setup GLSL program
    const vs_gl = createShader(gl, gl.VERTEX_SHADER, vs);
    const fs_gl = createShader(gl, gl.FRAGMENT_SHADER, fs);

    console.log(vs_gl, fs_gl);
    const program = createProgram(gl, vs_gl, fs_gl);
    const vertexIdLoc = gl.getAttribLocation(program, 'vertexId');
    const numVertsLoc = gl.getUniformLocation(program, 'numVerts');
    const timeLoc = gl.getUniformLocation(program, 'time');
    var screenLoc = gl.getUniformLocation(program, 'screenDim');

    gl.uniform2f(screenLoc, window.innerWidth, window.innerHeight);

    gl.enable(gl.GL_BLEND);
    gl.blendFunc(gl.GL_SRC_ALPHA, gl.GL_ONE_MINUS_SRC_ALPHA);

    // Make a buffer with just a count in it.

    const numVerts = 2000;

    // draw
    function render(time) {
        time *= 0.001;  // convert to seconds

        //webglUtils.resizeCanvasToDisplaySize(gl.canvas);
        gl.canvas.width = window.innerWidth;
        gl.canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        // tell the shader the number of verts
        gl.uniform1i(numVertsLoc, numVerts);
        // tell the shader the time
        gl.uniform1f(timeLoc, time);

        const offset = 0;
        gl.drawArrays(gl.POINTS, offset, numVerts);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

}


  export default BackgroundCanvas;