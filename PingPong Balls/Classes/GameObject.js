
// Game Object Base Class
export default class GameObject {
    constructor(DOMElement) {
        // Set the dom element
        this.DOMElement = DOMElement
        // Attach dom element to doccument
        document.body.appendChild(this.DOMElement)

        // Set initial position
        this.position = {
            x: 0,
            y: 0
        }

        // Set initial velocity
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    // Find Position
    calcPosition(dt) {
        // displacement = velocity * time
        this.position.x += this.velocity.x * dt * 1000
        this.position.y += this.velocity.y * dt * 1000
    }

    // Move Element on screen
    transform(pos) {
        this.DOMElement.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }

    // Update Function called every frame
    update(dt) {
        this.calcPosition(dt)
        this.transform(this.position)
    }
    
}