let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let radioBtn = document.getElementById("rbuttons")
let possibleChoices = document.querySelectorAll("button");
let restartLink = document.getElementById("reload")
let choices = ['rock', 'paper', 'scissors']
let userOption;
let computerOption;

let tries = 0;
let no_of_tries = 0;
let computerScore = 0;
let userScore = 0;
//------//
let userPoints = document.getElementById("userPoints")
let compPoints = document.getElementById("computerPoints")
let output1 = document.querySelector(".output1");
let output2 = document.querySelector("#output2");
let output3 = document.querySelector("#output3");
let scoreDisplay = document.querySelector(".scoreDisplay")
let result = document.createElement("p");


possibleChoices.forEach(element => element.addEventListener('click', (e) => {
    console.log("clicked")
    userOption = e.target.id; // what ever was clicked it will stored in userChoise

    console.log(userOption)
    rounds()
    computerChoices()
    // play()
    document.querySelector(".header").style.display = 'none'
    if (no_of_tries <= tries) {
        play();
    }
    if (no_of_tries == tries) {
        console.log("GAME RESULT")
        gameResult();
    }
}))
function rounds() {
    console.log("new round")

    if (num1.checked) {
        tries = num1.value;
        console.log(tries)
    }
    else if (num2.checked) {
        tries = num2.value;
        console.log(tries)
    }
    else if (num3.checked) {
        tries = num3.value;
        console.log(tries)
    }
    else if (num4.checked) {
        tries = num4.value;
        console.log(tries)
    }
    no_of_tries++;
    output1.innerHTML = `${no_of_tries}  / ${tries}`
    radioBtn.style.display = 'none';

}
function computerChoices() {
    console.log("computerOption")
    computerOption = Math.floor(Math.random() * choices.length)
    console.log(computerOption)
    if (computerOption == 0) {
        computerOption = 'rock'
    }
    else if (computerOption == 1) {
        computerOption = 'paper';
    }
    else if (computerOption == 2) {
        computerOption = 'scissors'
    }
    console.log(computerOption)
}
function play() {
    console.log("PLAY")
    console.log("num of tries" + no_of_tries)

    if (userOption === computerOption) {
        console.log('its a draw')
        output2.innerHTML = `its a draw You both chose ${userOption}`
    }
    if (userOption == 'rock' && computerOption == 'paper') {
        console.log('Computer wins')
        computerScore++
        userPoints.innerHTML = userScore;
        compPoints.innerHTML = computerScore;
        output2.innerHTML = `${computerOption}(comp) beats ${userOption}(user) You Lose!`
    }
    if (userOption == 'rock' && computerOption == 'scissors') {
        console.log('user wins')
        userScore++;
        userPoints.innerHTML = userScore;
        compPoints.innerHTML = computerScore;
        output2.innerHTML = `${userOption} (user) beats ${computerOption} (comp) You Win!`
    }

    if (userOption == 'paper' && computerOption == 'scissors') {
        console.log('Computer wins')
        computerScore++
        userPoints.innerHTML = userScore;
        compPoints.innerHTML = computerScore;
        output2.innerHTML = `${computerOption} (comp) beats ${userOption} (user)You Lose!`
    }
    if (userOption == 'paper' && computerOption == 'rock') {
        console.log('user wins')
        userScore++;
        userPoints.innerHTML = userScore;
        compPoints.innerHTML = computerScore;
        output2.innerHTML = `${userOption}(user) beats ${computerOption}(comp) You Win!`
    }
    if (userOption == 'scissors' && computerOption == 'rock') {
        console.log("computer wins")
        computerScore++
        userPoints.innerHTML = userScore;
        compPoints.innerHTML = computerScore;
        output2.innerHTML = `${computerOption} (comp) beats ${userOption} (user) You Lose!`
    }
    if (userOption == 'scissors' && computerOption == 'paper') {
        console.log("user wins")
        userScore++;
        userPoints.innerHTML = userScore;
        compPoints.innerHTML = computerScore;
        output2.innerHTML = `${userOption} (user) beats ${computerOption}(comp) You Win!`
    }
}



function gameResult() {
    console.log("THE RESULT METHOD")
    possibleChoices.forEach((e) => {
        e.style.display = 'none';
    })
    // possibleChoices.addEventListener('click', (e) => {
    //     e.preventDefault();
    // })
    output2.style.display = 'none';

    if (userScore > computerScore) {
        let txt = result.textContent = "The User Wins!"
        output3.append(txt)
    }
    else if (userScore < computerScore) {
        let txt = result.textContent = "The Computer Wins!"
        output3.append(txt)
    }
    else {
        let txt = result.textContent = "its a draw!"
        output3.append(txt)
    }
    restartLink.addEventListener('click', () => {
        window.location.reload();
    })


}

