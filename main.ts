#! /usr/bin/env node

import inquirer from "inquirer";


let toDos = [];
let condition = true;

while (condition) {
let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"What do you want to add in your Todos?!"
        },

        {
            name:"addMore",
            type:"confirm",
            message: "Are you sure you want to add more tasks?!",
            default:"false"
            
        }
        
    ]
);
toDos.push(addTask.todo);
condition = addTask.addMore;
console.log(toDos);


};




