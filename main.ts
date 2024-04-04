#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"; 
import { toASCII } from "punycode";

async function welcome () {
    let title = chalkAnimation.rainbow("\n\tlet  start Shah calculator\n\t")
    await new Promise((res => {
        setTimeout(res,2000);
    }))
    title.stop();
}
welcome();

const answer = await inquirer.prompt([{
     message : "\tEnter First Number = \t",
    type : "number",
    prefix: "",
    name : "firstNumber"
},

{
    message :  "\n\tEnter Second Number = \t",
    type : "number",
    prefix: "",
    name : "secondNumber"},

{
    message :  "\n\tselect one operators to perform operation\t",
    type : "list",
    name : "operator",
    prefix: "",
    choices:["Addition","Subtraction","Multiplication","Division"]
},
]);

if (answer.operator === "Addition"){
    console.log("your value is = " , answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction"){
    console.log("your value is = " , answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication"){
    console.log("your value is = " , answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
    console.log("your value is = " , answer.firstNumber / answer.secondNumber);
}
else{
    console.log("Please Enter a valid Numbers")
}
