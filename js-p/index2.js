console.log("this is tutorial on loops");
//for loop
console.log("Working of for loop")

let a=1;

for (let i =0; i<10; i++)
{
    console.log(a+i);
    
}

let obj ={
    name: "Harry",
    role: "Programmar",
    company: "CodeWithHarry AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
} 

for (const c of "Harry") {
    console.log(c);
    
}

//While loop
console.log("Working of while loop")
let i =0;
while(i<6)
{
    console.log(i)
    i++;
}
//do while loop
console.log("Working of do-while loop")
let k =5;
do {
    console.log(k)
    k++;
    
} while (k<10);