let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn 1 was clicked");
}

let div=document.querySelector("#div");
div.onmouseover=(evt)=>{
    console.log("U are inside div");
    console.log(evt);
}

//practice qs
//create a toggle button that changes the screen to darkmode when clicked and light mode when clicked again

let mode=document.querySelector("#mode");
let currentMode="light";

mode.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currentMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentMode);
})