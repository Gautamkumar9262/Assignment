//Check if a given number is a prime number using a loop.
 let num=parseInt(prompt("Enter a number: "))
    let prime;
    for(let i=2; i<=9; i++){
       Math.floor(prime=num%i)
    }
    if(prime!=0){
        console.log("Prime")
    }
    else{
        console.log("Not prime")
    }