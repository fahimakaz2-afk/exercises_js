console.log("Welcome to Buisness name generator: ");

 let random = Math.random()
 let adjective,shopname,anotherword;
if(random <= 0.33)
{
     adjective = "Crazy"
    
}
else if((random > 0.33 )&& (random <= 0.66))
{
     adjective = "Amazing"
 
}
else
{
     adjective = "Fire"
  
}

 random = Math.random()

if(random <= 0.33)
{
     shopname = "Engine"
}
else if((random > 0.33 )&& (random <=0.66))
{
     shopname = "food"
}
else
{
   
     shopname = "Garments"
}

  random = Math.random()
if(random <= 0.33)
{
     anotherword = "Bros"
}
else if((random > 0.33 )&& (random <= 0.66))
{

     anotherword = "Limited"
}
else
{
  
     anotherword = "HUb"
}

let B_N = adjective + shopname + anotherword;
console.log(random)


console.log(`adjective is: ${adjective}\n shop name is: ${shopname}\n Another Word ${anotherword}`)
alert(`Your buisness name is: ${B_N}`)
console.log(`Your buisness name is: ${B_N}`)