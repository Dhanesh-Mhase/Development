console.log("Hello World");
console.log("Error 404");
name="Tony Stark";
console.log(name);

x=null;
y=undefined;
console.log(x);
console.log(y);

{
    let a=45;
    console.log(a);
}

{
    let a=55;
    console.log(a);
}


//object
const student={
    fullName:"Dhanesh",
    age:20,
    CGPA:9.5
};


console.log(student);
console.log(student["age"]);
console.log(student.age);
student["age"]=student["age"]+1;
console.log(student.age);
//We can change constant object keys
//but we cannot change const variable
