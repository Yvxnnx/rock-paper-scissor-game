const results = document.getElementById("results")
const yourScore = document.getElementById("your-score")
const computerScore = document.getElementById("computer-score")
const scoreboard = document.getElementById("scoreboard")
const playAgainBtn = document.getElementById("play-again")
const btnRock = document.getElementById("btn-rock")
const btnPaper = document.getElementById("btn-paper")
const btnScissor = document.getElementById("btn-scissor")
const statusResult = document.getElementById("status")
const computerIcon = document.getElementById("computer-icon")

let maxScore = 5
let currentComputerScore = 0
let userScore = 0

function play(userChoice) {
    let computerChoice = Math.floor(Math.random() * 3) + 1; //Pipili ang computer from 1-3
    displayComputerChoice(computerChoice)

    if (userChoice == 1 && computerChoice == 1 
        || userChoice == 2 && computerChoice == 2 
        || userChoice == 3 && computerChoice == 3) {
        updateStatusResult("YOU TIED!")
    }

    if (userChoice == 1 && computerChoice == 2) {
        currentComputerScore++
        computerScore.innerText = currentComputerScore
        updateStatusResult("YOU LOST!")
    }

    if (userChoice == 1 && computerChoice == 3) {
        userScore++
        yourScore.innerText = userScore
        updateStatusResult("YOU WON!")
    }

    if (userChoice == 2 && computerChoice == 1) {
        userScore++
        yourScore.innerText = userScore
        updateStatusResult("YOU WON!")
    }

    if (userChoice == 2 && computerChoice == 3) {
        currentComputerScore++
        computerScore.innerText = currentComputerScore
        updateStatusResult("YOU LOST!")
    }

    if (userChoice == 3 && computerChoice == 1) {
        currentComputerScore++
        computerScore.innerText = currentComputerScore
        updateStatusResult("YOU LOST!")
    }

    if (userChoice == 3 && computerChoice == 2) {
        userScore++
        yourScore.innerText = userScore
        updateStatusResult("YOU WON!")
    }

    if(userScore == maxScore) {
        updateScoreboard()
        scoreboard.classList.add("d-none")
        playAgainBtn.classList.remove("disabled")
        disableBtns()
        updateStatusResult("CONGRATULATIONS YOU WON!")
    }

    if(currentComputerScore == maxScore) {
        updateScoreboard()
        scoreboard.classList.add("d-none")
        playAgainBtn.classList.remove("disabled")
        disableBtns()   
        updateStatusResult("TRY AGAIN!")
    }
}

function playAgain() {
    scoreboard.classList.remove("d-none")
    playAgainBtn.classList.add("disabled")
    enableBtns()
    updateStatusResult("")
    displayComputerChoice(-4)
}

function disableBtns() {
    btnRock.classList.add("disabled")
    btnPaper.classList.add("disabled")
    btnScissor.classList.add("disabled")
    computerIcon.classList.add("d-none")//
}

function enableBtns() {
    btnRock.classList.remove("disabled")
    btnPaper.classList.remove("disabled")
    btnScissor.classList.remove("disabled")
}

function updateScoreboard() {
    userScore = 0
    currentComputerScore = 0
    yourScore.innerText = userScore
    computerScore.innerText = currentComputerScore
}

function updateStatusResult(msg) { //
    statusResult.innerText = msg
}

function displayComputerChoice(computerChoice) {
    computerIcon.removeAttribute("class") 
    if(computerChoice == 1) {
        computerIcon.classList.add("fa-solid" , "fa-hand-fist")
    } else if(computerChoice == 2) {
        computerIcon.classList.add("fa-solid" , "fa-hand")
    } else if(computerChoice == 3) {
        computerIcon.classList.add("fa-solid" , "fa-hand-peace")
    } else {
        computerIcon.classList.add("d-none")
    }
}