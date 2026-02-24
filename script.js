let interviewlist=[]
let rejectedlist=[]
let total=document.getElementById("total-count");
let interview=document.getElementById("interview-count");
let rejected=document.getElementById("rejected-count");


const allcards=document.getElementById("all-cards");

const maincontainer=document.querySelector("main");

function calculatecount(){
    total.innerText=allcards.children.length;
    interview.innerText=interviewlist.length;
    rejected.innerText=rejectedlist.length;
}
calculatecount();

function Togglestyle(id){
    console.log("click",id)}