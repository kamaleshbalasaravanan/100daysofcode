// console.log('hi')


const buttons = document.querySelectorAll('button')

const playerscore = document.querySelector('.playerscore')
const computerscore = document.querySelector('.computerscore')
const comments = document.querySelector('.comments')
const playerText = document.querySelector('.playerText')
const computerText = document.querySelector('.computerText')


let player 
let computer
let playerwins = 0
let computerwins = 0

buttons.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent

    computerTurn()
    comments.textContent = checkWinner()
    playerscore.textContent = `your score: ${playerwins}`
    computerscore.textContent = `computer score: ${computerwins}`

    playerText.textContent = `player: ${player}`
    computerText.textContent = `computer: ${computer} `

}) )

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1
    console.log(randNum)

    switch(randNum){
        case 1:
            computer = "rock"
            break
        case 2:
            computer = "paper"
            break
        case 3:
            computer = "scissor"
            break
    }
}

function checkWinner (){

    if(computer == player){
        playerwins += 0
        computerwins += 0
        return "it's a tie"
    }
    else if (computer == "rock"){
        if(player == "paper"){
            playerwins += 1
            computerwins += 0
            return "you win!"
        }
        else{
            playerwins += 0
            computerwins += 1
            return "computer win!"
        }
    }

    else if (computer == "paper"){
        if(player == "scissor"){
            playerwins += 1
            computerwins += 0
            return "you win!"
        }
        else{
            playerwins += 0
            computerwins += 1
            return "computer win!"
        }
    }

    else if (computer == "scissor"){
        if(player == "rock"){
            playerwins += 1
            computerwins += 0
            return "you win!"
        }
        else{
            playerwins += 0
            computerwins += 1
            return "computer win!"
        }
    }


}