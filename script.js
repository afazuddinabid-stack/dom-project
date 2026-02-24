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
const filteredsection=document.getElementById("filtered-section");

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
    if (event.target.classList.contains("interview-btn")) {
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
        const plantexist=interviewlist.find(item=>item.companyname==carddetails.companyname);
        if (!plantexist){
            interviewlist.push(carddetails);
        }
        renderinterviewlist();
    }
})

function renderinterviewlist(){
    filteredsection.innerHTML="";
    for(let interview of interviewlist){
        let div=document.createElement("div");
        div.className="card";
        div.innerHTML=`

        <div class="card">
      <h1 class=" company-name text-black-600 font-bold">${interview.companyname}</h1>
      <p class="position-name">${interview.positionname}</p>
      <br>
      <p class="salary">Remote• Full-time •$130,000 - $175,000</p>
      <br>
      <h6 class=" status text-black-100 font-bold">Interview</h6>
      <br>
      <p class="discription">${interview.discription}   </p>
      <div class="flex gap-4 mt-4">
        <button class="p-2 w-24 text-green-400 border border-green-1 rounded-md">Interview</button>
        <button class="p-2 w-24 text-red-400 border border-red-1 rounded-md">Rejected</button>
      </div>
        </div>
        `;
        filteredsection.appendChild(div);
    }
}

    
