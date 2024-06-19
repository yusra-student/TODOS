import inquirer from "inquirer"
let todo:string[]=[];
let loop =true;
while(loop){
const addTask:{
    todo:string,
    addMore:boolean,
}=await inquirer.prompt([
    {
        name:"todo",
        type:"input",
        message:"what you want to add in your todo?",
    },
    {
        name:"addMore",
        type:"confirm",
        message:"Do you want to add more ?",
        default:false
    },

]);
const{todo,addMore}= addTask;
console.log(addTask)
     loop =addMore

console.log(todo);

}
