/* create  a faulty calculator using java script

this faulty calculator does following:
1. It takes two numbers as input from User
2. it performs wrong operations as follows:

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times.

*/

let random = Math.random();
console.log("Welcome to The Calculator: ");
let a = prompt("Enter first  no.");
let c = prompt("Enter operation");
let b = prompt("Enter second  no.");
console.log("You entered",a," ",b);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)} `)
    console.log(`The result is ${a} ${c} ${b} `)
   
}

else{
    c = obj[c]
      alert(`The result is  ${eval(`${a} ${c} ${b}`)}`)
      console.log(`The result is ${a} ${c} ${b} `)
}