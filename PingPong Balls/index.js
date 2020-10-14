// INport Ball Class
import Ball from './Classes/Ball.js'

// Time taken to draw previous frame
let d0 = Date.now()
// List of objects in the simulation
const objects = []

function setup() {
    // Adding a click listener to the page
    document.body.addEventListener('mousedown', (e) => {
        // Spawn new ball
        const ball = new Ball()

        // Set ball pposiiton on the mouse's position
        ball.position.x = e.clientX
        ball.position.y = e.clientY

        // Add ball to the list of balls
        objects.push(ball)
    })

    // Begin Render loop
    render()
}

// Render Loop
function render() {
    // Calculate delta time
    const dt = _tick() / 1000

    // Loop over all objects in the scene
    objects.forEach((o, i) => {
        // Call update on each ball
        o.update(dt)
        // Check for ball-ball collisions
        o.checkCollide(objects)
    })

    // Call Render again recursively
    requestAnimationFrame(render)
}

// Calculate delta time
function _tick() {
    var now = Date.now();   // Get 'now' in ms
    let dt = now - d0;      // dt = 'now' - 'prev'
    d0 = now;               // set 'prev' to now
    return dt;              // return dt
}

// Entry point
setup()