// function hello(){
//     console.log(hello);
// }
// setTimeout(hello,4000);

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");



//callback hell

// function getData (dataID,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataID);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// })



//Promises

// let promise=new Promise((resolve,reject)=>{
//     console.log("hello");
//     resolve("FUlfilled");
// })

//promise chain

// function getData (dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success")
//     },2000);
// });
// }

// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// })


//Aync await

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
} 