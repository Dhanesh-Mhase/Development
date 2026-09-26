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


//forEach function

let arr=[1,2,3,4,5];

arr.forEach(function printVal(val){    
    console.log(val);
});


arr.forEach((val)=>{
    console.log(val);
});


//Map

let squaredArr= arr.map((val)=>{
    return val*val;
})

console.log(squaredArr);


let filteredArr=arr.filter((val)=>{
    return val%2==0;
})

console.log(filteredArr);


//reduce

const output=arr.reduce((res,current)=>{
    return res+current;
})
console.log(output)