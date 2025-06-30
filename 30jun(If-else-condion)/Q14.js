var prompt = require('prompt-sync')();
//Q14:Write a program to take Input marks of a student (out of 100) and print the grade:A (≥90), B (≥75), C (≥60), D (≥40), F (<40).


let marks = prompt("Enter your marks: ");
let marksNum= parseInt(marks);

if(marksNum>=90){
    console.log("A")
}
else if(marksNum >=75){
    console.log("B")
}
else if(marksNum >=60){
    console.log("c")
}
else if(marksNum >=40){
    console.log("D")
}
else{
    console.log("F")
}
