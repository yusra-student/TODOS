import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your todo?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more ?",
            default: false
        },
    ]);
    const { todo, addMore } = addTask;
    console.log(addTask);
    loop = addMore;
    console.log(todo);
}
