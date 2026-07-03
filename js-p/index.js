console.log("Hello I am conditional tutorial")
//basic arithmetic operations..
let age = 18;
let grace =2;

age += grace;

console.log(age);
console.log(age+grace)
console.log(age-grace)
console.log(age*grace)
console.log(age/grace)
console.log(age ** grace)
console.log(age % grace)
// checking driving elegibility
if(age >= 18)
{
    console.log("You can drive");
}
else
{
    console.log("You cannot drive");
}

// check for age in between 10 and 20

a = 9;
if(a>=10&&a<=20)
{
    console.log("yes it lies");
}
else
{
    console.log("No it don't")
}

// demonstrating switch

let dn = 1;
switch(dn)
{
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    default:
        console.log("Invalid no.")
        
}

// checking divisibility with 2 and 3

let num = 6;
if(num%2==0 && num%3==0){
    console.log("Yes Divisible");
}
else{
    console.log("Not divisible");
}



