var prompt = require('prompt-sync')();
//Q29:Input the side lengths of a triangle and check if it is valid, isosceles, equilateral, or scalene.

let side1=parseInt(prompt("Enter first side of triangle: "));
let side2=parseInt(prompt("Enter second side of triangle: "));
let side3=parseInt(prompt("Enter third side of triangle: "));

if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1){
    console.log("Triangle is Valid");

    if(side1 == side2 && side2== side3){
    console.log("All side equal (equilateral)")
    }
    else if(side1 == side2 || side1 == side3 || side2==side3){
        console.log("two side equal (isosceles)")
    }
    else{
        console.log("No Equal (scalene)")
    }
}
