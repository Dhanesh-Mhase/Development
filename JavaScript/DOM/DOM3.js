let newBtn= document.createElement("button");
newBtn.innerText="Click me!";

console.log(newBtn)


//add button inside the div :append (inside div)
let div=document.querySelector("div");
div.append(newBtn);

//prepend add at start (inside)
div.prepend(newBtn);

//before (outside the node and just before the node)
div.before(newBtn);

//after (outside the node and just after the node)
div.after(newBtn);


//Delete 
newBtn.remove();



//practice

let psBtn=document.createElement("button");
psBtn.innerText="Click me!";

psBtn.style.color="white";
psBtn.style.backgroundColor="red";

document.querySelector("body").prepend(psBtn);


//q2
let para=document.querySelector("p");


