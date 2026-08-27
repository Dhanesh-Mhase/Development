// for(let i=0;i<5;i++){
//     console.log("Hello World");
// }



//Sum 1 to n
// let sum=0;
// for(let i=0;i<=5;i++){
//     sum+=i;
// }

// console.log(sum);

//While
// let i=1;
// while(i<=5){
//     console.log(i);
//     i+=1;
// }

//do while

// let i=10;
// do{
//     console.log(i);
//     i+=1;
// }
// while(i<=5);

//for of loop

// let str="Hello World";
// for(let val of str){
//     console.log(val);
// }


//for in loop

// let student= {
//     name:"Rahul Kumar",
//     age:20,
//     cgpa:9.5
// };

// for(let i in student){
//     console.log(student[i]);
// }




//Strings
let str1="Dhanesh";
let str2='Hello Boyyy';
let obj={
    name:"Pen",
    price:100
};

console.log(str1.length);
console.log(str1[0]);

//Template literals
let output = `The price of ${obj.name} is ${obj.price}`;
console.log(output)

//String Methods
console.log(str2.toUpperCase()); 
console.log(str2.toLowerCase());

let str3="   Hi  "
//trim removes start and end spaces
console.log(str3.trim()); 

let str4="Hiimy name is iota ,i have the 6 years old title";

console.log(str4.slice(2,4)); //4 not included
console.log(str1.concat(str2));
console.log(str4.replace("is","IS"));
//replace only changes first appearance , use replaceAll for all changes to be done
console.log(str4.charAt(0));

