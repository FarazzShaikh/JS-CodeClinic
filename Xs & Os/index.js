// Array of cell representing every cell in the board
const cells = [         // Indexed:
    '', '', '',         //  0   1   2
    '', '', '',         //  3   4   5
    '', '', '',         //  6   7   8
]

// Array of win condition
const winConditions = [
    [0, 1, 2],          //
    [3, 4, 5],          //  Horizontal Rows
    [6, 7, 8],          //

    [0, 3, 6],          // 
    [1, 4, 7],          //  Vertical Rows
    [2, 5, 8],          // 

    [0, 4, 8],          // 
    [2, 4, 6],          //  Diagonal Rows
]

// Array of cells as DOM Elements
const cellNodes = document.querySelectorAll('.cell')

// Loop over each Cell Node
cellNodes.forEach((node, index) => {
    // Add click listener to each node
    node.addEventListener('click', () => {
        if(cells[index] === "") {           // if Cell is Empty
            cells[index] = "X"              // Set cell to X
            draw(index, 'X')                // Draw X on screen

            // Wait for 100ms for draw() to finish
            setTimeout(() => {
                handleWiner(checkWins())    // Check for wins
                cpuTurn()                   // Pass Turn to CPU
            }, 100);
            
        }
    })
})

// Function to handle CPU Turn
function cpuTurn() {
    if(!checkIfFull()) {                            // if The board is not full
        let index = Math.floor(Math.random() * 8)   // Select a random index

        // while the random index is not empty
        while(cells[index] != "") {
            index = Math.floor(Math.random() * 8)   // Keep Selecting random indicies
        }
        cells[index] = "O"                          // Set cell to O
        draw(index, "O")                            // Draw O on screen

        // Wait for 100ms for draw() to finish
        setTimeout(() => {
            handleWiner(checkWins())                 // Check for wins
        }, 100);
        
    }
   
}

// Dandle Winner
function handleWiner(winner) {
    switch (winner) {
        case 'P':                       // Player Won
            alert('Player Has Won')     // Notify player
            location.reload()           // Reload Game
            throw new Error()           // Throw error to stop game
    
        case 'C':
            alert('CPU Has Won')        // CPU Won
            location.reload()
            throw new Error()
        default: {
            if(checkIfFull()) {
                alert('Its a draw')     // It's a Draw
                location.reload()
                throw new Error()
            }
        }
            
    }
}

// Check who won
function checkWins() {
    let winner = 'D'                // Keep track of winner

    // Loop over each win condition
    winConditions.forEach(c => {
        const i0 = c[0]             // Win index 0
        const i1 = c[1]             // Win index 1
        const i2 = c[2]             // Win index 2

        // IF all cells with win indicies are X, player won
        if(cells[i0] === 'X' && cells[i1] === 'X' && cells[i2] === 'X') {
            winner = 'P'
            return
        }

        // IF all cells with win indicies are O, CPU won
        if(cells[i0] === 'O' && cells[i1] === 'O' && cells[i2] === 'O') {
            winner = 'C'
            return
        }
    })
    return winner
}

// Draw To Screen
function draw(index, sign) {
    cellNodes[index].textContent = sign
}

// Check if the board is full
function checkIfFull() {
    let count = 0           // COunter
    cells.forEach(c => {    // Loop over each cell
        if(c === "")        // if cell is empty
            count++         // add to counter
    })
    return count === 0      // return if counter is empty
}