const prompt = require("prompt-sync")();

//1. Enter Deposit from the User.

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter Deposit Amount: ");
    const numberdepositAmount = parseFloat(depositAmount);

    if (isNaN(numberdepositAmount) || numberdepositAmount <= 0) {
      console.log("The Amount Entered is Invalid, Try Again");
    } else {
      return numberdepositAmount;
    }
  }
};

//2. Determine Number of Lines To bet on.

const getnumberoflines = () => {
  while (true) {
    const lines = prompt("Enter the Number of Lines (1-3): ");
    const numoflines = parseInt(lines);
    if (isNaN(numoflines) || numoflines <= 0 || numoflines > 3) {
      console.log("Invalid number Of Lines , Try Again");
    } else {
      return numoflines;
    }
  }
};

//3. Collect The bet Amount.
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid Bet , Try Again");
    } else {
      return numberBet;
    }
  }
};

//4. Spin The Slot Machine.
//5. Check If the User Won.
//6. Give User The Winnings.
//7. Play Again.

let balance = deposit();
const lines = getnumberoflines();

console.log("Collecting Bet Amount.........");

const bet = getBet(balance, lines);
