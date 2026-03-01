let currentTab = "all";
const tabActive = ["bg-navy", "text-white", "border-navy", "border-b-2"];

const tabInactive = ["bg-transparent", "text-slate-700", "border-transparent", "border-state-200" ];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");



function switchTab(tab) {
    console.log(tab);
    const tabs= ["all", "interview", "rejected"];
    currentTab = tab;

for (const t of tabs){
    const tabName = document.getElementById("tab-" + t);
    console.log(tabName);
    if (t === tab) {
        
        tabName.classList.remove(...tabInactive);
        tabName.classList.add(...tabActive);
    }
    else {
        tabName.classList.remove(...tabActive);
        tabName.classList.add(...tabInactive);
    }
  }

 
  
  if (tab === "all") {
    allContainer.classList.remove("hidden");
    interviewContainer.classList.add("hidden");
    if (allContainer.children.length <1) {
        emptyState.classList.remove("hidden");
    }
    
    rejectContainer.classList.add("hidden");
  }
    else if (tab === "interview") {
    allContainer.classList.add("hidden");
    if (interviewContainer.children.length <1) {
        emptyState.classList.remove("hidden");
    }
    
    
    interviewContainer.classList.remove("hidden");
    rejectContainer.classList.add("hidden");
  }
    else if (tab === "rejected") {
    allContainer.classList.add("hidden");
    if (rejectContainer.children.length <1) {
        emptyState.classList.remove("hidden");
    }
    interviewContainer.classList.add("hidden");
    rejectContainer.classList.remove("hidden");
      
  }
  updateStats();
}

const totalstat = document.getElementById("stat-total");
const interviewstat = document.getElementById("stat-interview");
const rejectedstat = document.getElementById("stat-rejected");
const available = document.getElementById("available");

totalstat.innerText = allContainer.children.length;
switchTab(currentTab)

document.getElementById("jobs-container").addEventListener("click",function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
   
    if(clickedElement.classList.contains("interview")){
        // console.log("Interview  clicked");
        interviewContainer.appendChild(card);
        status.innerText = "Interview";
        updateStats();
    }
    if(clickedElement.classList.contains("rejected")){
        // console.log("Rejected clicked");
        rejectContainer.appendChild(card);
        status.innerText = "Rejected";
        updateStats();
    }
    if(clickedElement.classList.contains("delete")){
        // console.log("Delete clicked");
        card.remove();
    }
        
})

function updateStats() {
    // totalstat.innerText = allContainer.children.length 
    // interviewstat.innerText = interviewContainer.children.length;
    // rejectedstat.innerText = rejectContainer.children.length;

    const count = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectContainer.children.length
    }
    totalstat.innerText = count["all"];
    interviewstat.innerText = count["interview"];
    rejectedstat.innerText = count["rejected"];
    available.innerText = count[currentTab];
    
}
updateStats();
