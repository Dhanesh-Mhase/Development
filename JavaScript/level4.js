let marks=[12,13,11,14,10];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));

marks[0]=99;
console.log(marks)


for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

//for of
for(let mark of marks){
    console.log(mark);
}

let cities=["Mumbai","Delhi","Chennai"];
for( let i in cities){
    console.log(cities[i].toUpperCase());
}

//-------------------------------------------------------------//

//array methods

let foodItems=["potato","apple","litchi","tomato"];
foodItems.push("banana","paneer");
console.log(foodItems);


foodItems.pop();
console.log(foodItems);

console.log(foodItems.toString());


let firstAlp=["A","B","C"];
let lastAlp=["X","Y","Z"];

let Alp=firstAlp.concat(lastAlp);
console.log(Alp);


lastAlp.unshift("w");
console.log(lastAlp);
lastAlp.shift();
console.log(lastAlp)