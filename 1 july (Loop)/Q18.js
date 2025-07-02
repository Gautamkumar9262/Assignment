//Print the reverse of a number using a loop (e.g., 123 → 321).
let num=123;
let x=""
for(num;num>0;){
    x+=num%10;
    num=Math.floor(num/10);
}
console.log(x)