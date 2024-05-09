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

const depositAmount = deposit();
console.log(depositAmount);

//2. Determine Number of Lines To bet on.

const lines = () => {
    while(true){
        const liners = prompt("Enter the Number of Lines: ");
        const numoflines = parseInt(liners);
        if(isNaN(numoflines) || numoflines <= 0 || numoflines > 3){
            console.log("Invalid number Of Lines , Try Again");
        }
        else{
            return numoflines;
        }
    }
};

const liners =  lines();
console.log(liners);
console.log("Collecting Bet Amount.........");
//3. Collect The bet Amount.


//4. Spin The Slot Machine.
//5. Check If the User Won.
//6. Give User The Winnings.
//7. Play Again.
