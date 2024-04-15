#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let myBalance = 10000; //Dollar

let myPin = 1234;

console.log(chalk.blue("\n \tWelcome to code with Ayesha Sikander - ATM Machine\n"));;

let pinAnswer = await inquirer.prompt(
    [ 
         {
            name: "pin",
            message: chalk.yellow("Enter your pin"),
            type: "number"

         }
    ]
);

if (pinAnswer.pin === myPin){
    console.log(chalk.green("\nCorrect pin Code!!!\n"))

let operationAns = await inquirer.prompt(
    [
      {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw","check balance"]

      }
    ]
);

if (operationAns.operation === "withdraw"){
let withdrawAns = await inquirer.prompt([
        {
          name: "withdrawMethod",
          message: "Select a withdrawal method:",
          type: "list",
          choices: ["fast Cash","Enter Amount"]
        }
    ])
    if(withdrawAns.withdrawMethod === "fast Cash"){
        let fastCashAns = await inquirer.prompt([
          {
            name: "fastCash",
            message: "Select Amount:",
            type: "list",
            choices: [1000,2000,5000,10000,50000]
          }
        ])
        if(fastCashAns.fastCash > myBalance){
          console.log(chalk.red("Insufficent Balance"));
        }
        else{
          myBalance -= fastCashAns.fastCash
          console.log(`${fastCashAns.fastCash} withdraw Successfully`)
          console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
else if (withdrawAns.withdrawMethod === "Enter Amount"){
  let amountAns = await inquirer.prompt([
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }

 ]);
    if(amountAns.amount > myBalance){
console.log("Insufficent Balance");
}
   else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`) ;
        console.log(`your remaining balance is: ${myBalance}`);
}
}

  } else if (operationAns.operation === "check balance"){
    console.log("your balance is: " + myBalance);
  }
}

else{
    console.log(chalk.red("Incorrect pin Code"));
}