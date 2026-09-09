//function

function myFunction(){
    console.log("Hello world");
}

myFunction();


function greet(name){
    console.log("Good morning",name);
}
greet("Dhanesh");


//arrow function
let sum=(num1,num2)=>{
    return num1+num2;
};

let ans=sum(2,3);
console.log(ans);