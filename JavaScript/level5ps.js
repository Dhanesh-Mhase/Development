function countVowel(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    console.log(count);
}

countVowel("Dhanesh");


let countVow=(str)=> {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    console.log(count);
}

countVow("dhanesh");


let arr=[1,2,3,4,5];

arr.forEach((val)=>{
    console.log(val*val);
})


//filter makrs that scored above 90
let marks=[97,64,32,49,99,96,86];

let result=marks.filter((val)=>{
    return val>90;
});
console.log(result);


//n input number and 1 to n in array then summand prdouct of array
let n=number(prompt("Enter a number:"));

let oneton=[];
for(let i=1;i<=n;i++){
    oneton[i-1]=i;
}

let sqArr=oneton.reduce((prev,current)=>{
    return prev+current;
})
console.log(sqArr);

