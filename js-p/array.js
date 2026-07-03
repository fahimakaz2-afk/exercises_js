let arr = [1,2,4,5,3]

// arr[0] = 566
// console.log(arr , typeof arr)
// console.log(arr.length)

console.log(arr.toString())
console.log(arr.join(" & "))

console.log(arr.pop())
console.log(arr.push(" Harry "))

arr.shift();// removes 0th element , pop ka bhai
arr.unshift(); // add element 0th index push ka bhai

delete arr[4] // delete element at 4th posn.

console.log(arr.sort());

console.log(arr.splice(1,3, 222,333))
console.log(arr)


// loops in array
let a =[1,4,6,3]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// a.forEach((value, index, arr)=>{
//     console.log(value, index, a)
// })

let b = [1,4,5,6,7]
let newb = []
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    newb.push(element**2)
    
}

console.log(newb)

let c = [3,4,8,9]
// let nc =[]
// for (let index = 0; index < c.length; index++) {
//     const element = c[index];
//     nc.push(element+1)

// }


let nc = c.map((e)=>{
    return e**2;
})
console.log(nc);

const greatThanSeven=(e)=>{
    if(e>7)
    {
        return true
    }
    return false
}
console.log(c.filter(greatThanSeven))

let arr2 = [1,2,3,4,5]
const red = (a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))