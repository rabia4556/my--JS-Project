let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScoreparah = document.querySelector("#user-score")
const compScoreparah = document.querySelector("#comp-score")

const usertext = document.querySelector("#text1")
const comptext = document.querySelector("#text2")

const genComputerchoice = () => {
    // rock, paper, scissor
    const options = ["Rock","Paper","Scissors"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id")
        console.log("choice was clicked")
        playGame(userChoice)
    })
})

const drawGame = () => {
    console.log("game was draw")
    msg.innerText = "Game was Draw.Play again."
    msg.style.backgroundColor = "#3674B5"
}

const showwinner = (userwin,userChoice,compChoice) => {
    if (userwin) {
        userScore++
        userScoreparah.innerText = userScore
        console.log("You win!")
        msg.innerText = `You win! Your ${ userChoice } beats ${ compChoice } `
        msg.style.backgroundColor = "#347433"
    } else {
        compScore++
        compScoreparah.innerText = compScore
        console.log("You lose.")
        msg.innerText = `You lose. ${ compChoice } beats your ${ userChoice }`
        msg.style.backgroundColor = "#B22222"
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice)
    usertext.innerText = userChoice
    // Generate computer choice
    const compChoice = genComputerchoice()
    console.log("comp choice = ",compChoice)
    comptext.innerText = compChoice

    if (userChoice === compChoice) {
        // Draw Game
        drawGame()
    } else {
        let userwin = true
        if (userChoice === "Rock") {
            // scissor, paper
            userwin = compChoice === "Paper" ? false : true
        } else if (userChoice === "Paper") {
            //rock, scissors
            userwin = compChoice === "Scissors" ? false : true
        } else {
            //rock, paper
            userwin = compChoice === "Rock" ? false : true
        }
        showwinner(userwin,userChoice,compChoice)
    }
}

const restartBtn = document.querySelector("#restartBtn")

restartBtn.addEventListener("click",function () {
    location.reload()
})
