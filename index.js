#! urs/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to CodingGame - CLI Number Gussing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number between 1 to 5",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulation! You Win");
}
else {
    console.log("Sorry You Lose! Try again");
}
