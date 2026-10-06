const url= "https://catfact.ninja/fact";
const paraFact=document.querySelector("#fact");
const CatFacts=document.querySelector("#cat-fact");


const getFacts = async ()=>{
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    paraFact.innerText=data.fact;    
};


CatFacts.addEventListener("click",getFacts);
