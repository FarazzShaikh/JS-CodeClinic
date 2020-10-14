// Import GameObject Class
import GameObject from "./GameObject.js"

// Ball Class that inherits from GameObject
export default class Ball extends GameObject{
    constructor() {
        // List of possible colors
        const colors = ['Aquamarine', 'Azure', 'Bisque', 'AliceBlue', 'AntiqueWhite']
        // Random index to select randmo color
        const rand = Math.floor(Math.random() * colors.length)

        // Generate Dom element
        const DOMElement = document.createElement('div')
        DOMElement.style.width = '20px'
        DOMElement.style.height = '20px'
        DOMElement.style.borderRadius = '10px'
        DOMElement.style.backgroundColor = colors[rand]
        DOMElement.style.position = 'absolute'

        // Call constructor of parent class with dom element
        super(DOMElement)

        // Set random valocity
        this.velocity = {
            x: Math.random() * (0.5 - -0.3) + -0.3,
            y: Math.random() * (0.5 - -0.3) + -0.3
        }

        // Set random ID
        this.id = Math.floor(Math.random() * 10000)
    }

    // Update Function overrides parent class Update()
    update(dt) {
        // Check for screen bounds Collision
        if(this.position.y >= window.innerHeight || this.position.y <= 0) {
            this.velocity.y *= -1
        }
        if(this.position.x >= window.innerWidth || this.position.x <= 0) {
            this.velocity.x *= -1
        }

        // Calculate current position
        this.calcPosition(dt)
        // Move Ball to current position
        this.transform(this.position)
    }

    // Check Ball-ball collision
    checkCollide(objs) {
        // loob over all game objects
        objs.forEach(o => {
            // to avoid self collisions
            if(o.id !== this.id) {
                // Calculate distance between 2 balls
                var dx = this.position.x - o.position.x;
                var dy = this.position.y - o.position.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
    
                // Chekc is distance is gretaer than sum of both radii
                if (distance < 20) {
                    // Invert velocity
                    o.velocity.x *= -1
                    o.velocity.y *= -1
                }
            }
            
        })
    }
}