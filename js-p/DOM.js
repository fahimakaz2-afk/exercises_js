console.log("Hello, World!")

// document.body.firstChild
// document.body.firstChild.childNodes
// document.body.firstChild.children

function changecolor()
{
    document.body.style.backgroundColor = "lightblue"
    document.getElementById("heading").innerText = "I did it!"

}

function CC()
{
    document.body.style.backgroundColor = "lightpink"
    document.getElementById("second").innerText ="FAhima"
}

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor = "lightpink";

document.getElementById("red").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})

document.querySelector(".container").contains(document.querySelector("box"));