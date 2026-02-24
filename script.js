let interviewlist=[]
let rejectedlist=[]
let total=document.getElementById("total-count");
let interview=document.getElementById("interview-count");
let rejected=document.getElementById("rejected-count");


const allfilterbtn=document.getElementById("all-filter-btn");
const interviewfilterbtn=document.getElementById("interview-filter-btn");
const rejectedfilterbtn=document.getElementById("rejected-filter-btn");

const allcards=document.getElementById("all-cards");

const maincontainer=document.querySelector("main");

function calculatecount(){
    total.innerText=allcards.children.length;
    interview.innerText=interviewlist.length;
    rejected.innerText=rejectedlist.length;
}
calculatecount();

function Togglestyle(id){
    allfilterbtn.classList.remove("btn-primary");
    interviewfilterbtn.classList.remove("btn-primary");
    rejectedfilterbtn.classList.remove("btn-primary");

    allfilterbtn.classList.add("bg-gray-300");
    interviewfilterbtn.classList.add("bg-gray-300");
    rejectedfilterbtn.classList.add("bg-gray-300");
    const selected=document.getElementById(id);
    selected.classList.remove("bg-gray-300");
    selected.classList.add("btn-primary");
    
}

maincontainer.addEventListener('click', function (event) {
    const parentNode = event.target.parentNode.parentNode;
    const companyname =parentNode.querySelector(".company-name").innerText;
    const positionname =parentNode.querySelector(".position-name").innerText;
    const salary =parentNode.querySelector(".salary").innerText;
    const status =parentNode.querySelector(".status").innerText;
    const discription=parentNode.querySelector(".discription").innerText;

    const carddetails={
        companyname,
        positionname,
        salary,
        status,
        discription
    }

})