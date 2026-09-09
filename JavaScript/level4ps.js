let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum+=mark;
}
let avg=sum/marks.length;

console.log(`avg marks = ${avg}`);

//----------------------------------------------------//

//offer
let values=[250,645,300,900,50];

for(let i =0;i<values.length;i++){
    values[i]-=(values[i]/10);
}
console.log(values);