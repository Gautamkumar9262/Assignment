var prompt = require('prompt-sync')();
//Q26: Input basic salary and calculate net salary based on conditions:

//HRA = 20%, DA = 50% if basic < 10000; else HRA = 30%, DA = 80%.

let amount = prompt("Enter Your Salary: ")
let BasicSalary=parseInt(amount)

if(BasicSalary<10000){
    let HRA=10000*20/100
    let DA=10000*50/100;

    console.log("Your Net Salary is: ",BasicSalary+HRA+DA)
    
}

else{
    let HRA=10000*30/100
    let DA=10000*80/100;
    console.log("Your Net Salary is: ",BasicSalary+HRA+DA)

}