
function main() {

    let choose = document.getElementById('submit');
    choose.addEventListener('click', () => {
        let choices  = ['rock', 'paper', 'scissors'];
    
        let userInput = document.getElementById('choice').value;
    
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        if (userInput == computerChoice) {
            alert(`Well that was weird! It was a tie. \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else if (userInput == 'paper' && computerChoice == 'rock') {
            alert(`You win! \n The pen beats the sword? More like the paper beats the rock. \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else if (userInput == 'rock' && computerChoice == 'scissors') {
            alert(`You win! \n Aw man, you actually managed to beat me! I call a rematch! \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else if (userInput == 'scissors' && computerChoice == 'paper') {
            alert(`You win! \n Damn it! You won, but it won't happen again! \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else if (userInput == 'rock' && computerChoice == 'paper') {
            alert(`You lose! \n Yay! I won! Try your luck again. \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else if (userInput == 'paper' && computerChoice == 'scssors') {
            alert(`You lose! \n Nice try, but I won that time! \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else if (userInput == 'scissors' && computerChoice == 'rock') {
            alert(`You lose! \n Haha, I JUST CRUSHED YOU! I ROCK!! \n\n Your choice: ${userInput}\n My choice: ${computerChoice}`);
        } else {
            alert("Invalid input! \n Try again with a valid input like: \n [rock, paper or scissors].");
        }
    });

}

main()