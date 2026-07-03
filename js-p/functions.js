function sum(a , b , c = 3)
{
    return a + b + c;
}

result1 = sum(3, 5);
result2 = sum(5, 5);
result3 = sum(5, 6);

console.log("The sum is : ",result1)
console.log("The sum is : ",result2)
console.log("The sum is : ",result3)

function nice(name)
{
    console.log("THIS Is "+ name +" HERE");
}
nice("HArry");

const func1 = (x)=>{
    console.log("I am an arrow function ",x)
}
func1(34);
func1(66);
func1(76);