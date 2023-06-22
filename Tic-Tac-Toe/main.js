// console.log("hi")
const cells = document.querySelectorAll('.cell')
const statusText = document.querySelector('.statusText')
const restartBtn = document.querySelector('#restartBtn')
const Xwins = document.querySelector('.X')
const Owins = document.querySelector('.O')


const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [6,4,2]
]

// console.log(winConditions[1])

let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = false
let computerWins = 0
let playerWins = 0

startGame()

function startGame(){
    // console.log(cell)
    cells.forEach(cell => cell.addEventListener("click", cellClicked) )
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `Now ${currentPlayer}'s turn`
    running = true
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex")
    // console.log(cellIndex)
    // options[0] = 1
    // console.log(options)

    if(options[cellIndex] != "" || !running){
        // console.log('hi')
        // console.log(cellIndex)
        return
    }
    // console.log(this)

    updateCell(this,cellIndex)
    checkWinner()
}

function updateCell(cell, index){
    options[index] = currentPlayer
    cell.textContent = currentPlayer
    // console.log('update')
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X" ) ? "O" : "X"
    statusText.textContent = `Now ${currentPlayer}'s turn`
    // console.log('changed')

}

function checkWinner(){
    // console.log("wins")
    let roundwon = false
    
    for(let i = 0; i< winConditions.length; i++){
        let condition = winConditions[i]

        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if(cellA == "" || cellB == "" || cellC == "" ){
            continue
        }

        if(cellA == cellB && cellB == cellC){
            roundwon = true
            break
        }
    }

    if(roundwon){
        statusText.innerHTML = `${currentPlayer}'s wins`
        running = false
        if(currentPlayer == "X"){
            computerWins += 1
            Xwins.innerHTML = `Player-X: ${computerWins}`
            // Xwins.innerHTML = `<h3 class="X">Player-X: <b>${playerWins}</b> </h3>`
            // console.log(computerWins)
        }
        else if(currentPlayer == "O"){
            playerWins += 1
            Owins.innerHTML = `Player-X: ${playerWins}`
            // Owins.innerHTML = `<h3 class="X">Player-X: <b>${playerWins}</b> </h3>`
            // console.log(playerWins)
        }
    }

    else if(!options.includes("")){
        statusText.innerHTML = `Draw the match!`
        running = false
    }

    else{
        changePlayer()
    }
}


function restartGame(){
    options = ["", "", "", "", "", "", "", "", ""]
    currentPlayer = "X"
    running = true
    statusText.innerHTML = `${currentPlayer}'s turn`
    cells.forEach(cell=> cell.textContent = "" )
}
