function createCard(title, cName, view, monthsOld, duration , thumbnail){
let viewno;
if(view < 1000){
     viewno = view;
}
else if(view > 1000000){
    viewno = view/100000 + "M";
}
else{
    viewno = view/1000 + "k";
}


   let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text"> 
                <h1>${title}</h1>
                <p>${cName}. ${viewno} views. ${monthsOld} months ago</p>
            </div>
        </div>` 

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}


createCard("Introduction to Backend | Sigma Web Dev Video #3", "CodeWithHarry", 5600, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");

createCard("Introduction to Backend | Sigma Web Dev Video #4", "CodeWithHarry", 560, 6, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");

createCard("Introduction to Backend | Sigma Web Dev Video #5", "CodeWithHarry", 700, 5, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");
