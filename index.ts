#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let toDos = [];
let condition = true;

while (condition) {
   
    let todo = await inquirer.prompt([
     {
        name:"todoOptions",
        type: "list",
        message:"What would you like to do in your Todos?",
        choices:["View list", "Add Items", "Discard last Item","Update last Item"]
    
    }
]);

if (todo.todoOptions === "View list") {
    console.log(chalk.bgBlueBright("Your Todo List:"))
    for(let task of toDos){
            console.log(chalk.whiteBright(task));
  };

} else if (todo.todoOptions==="Add Items") {
        
    
    let addTask = await inquirer.prompt([
    {
        name:"add",
        type:"input",
        message:"What would you like to add in your Todos?!"
    }]);
     toDos.push(addTask.add);
     console.log(toDos);

}else if (todo.todoOptions ==="Discard last Item") {
    
          let poppedTask = toDos.pop();
          console.log(chalk.bgBlueBright(`${poppedTask} is discarded.`));
          console.log(toDos);

}else if (todo.todoOptions === "Update last Item"){
   
          let popped = toDos.pop();
          let replace = await inquirer.prompt([{
            name:"change",
            type:"input",
            message:"write here:"
        }]);
        toDos.push(replace.change);
        console.log(chalk.bgBlueBright(`${popped} is replaced.`));
        console.log(toDos);
        
   };
};