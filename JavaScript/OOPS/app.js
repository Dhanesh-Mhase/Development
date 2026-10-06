const student={
    fullName:"ABC",
    marks:99,
    printMarks:function(){
        console.log("Marks:",this.marks) //this:ya object cha marks here student
    },
};


const dhanesh={
    function(){
    console.log("Hello");
    },
}

dhanesh.__proto__=student;


//

class Cars{
    constructor(brand){
        console.log("Object created") //by default runs (enovke) by "new"
        this.brandName=brand;
    }
    statrt(){
        console.log("statrt");
    }
}

let bmw=new Cars("BMW");


//Inheritance

class Parent{
    constructor(){
        this.species="homo sapiens";
    }
    hello(){
        console.log("hello");
    }
}

class Child1 extends Parent{
    constructor(branch){
        super();
        this.branch=branch;
    }
}

class Child2 extends Parent{
    hello(){
        console.log("Hello child");
    }
}


let sonu= new Child1("IT");
let monu=new Child2();