#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Wellcome Message
console.log("\n\tWellcome To '\ hinasherali \' CLI Simple Calculator\n");

// Asking Questions from users through Inqurier

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "SecondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// conditional statements If-Else

if(answers.operator === "Addition"){
console.log(answers.firstnumber + answers.SecondNumber)
}
else if (answers.operator === "Subtractions"){
    console.log(answers.firstnumber - answers.SecondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.SecondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstnumber / answers.SecondNumber)
}
else{
    console.log("invalid input")
}