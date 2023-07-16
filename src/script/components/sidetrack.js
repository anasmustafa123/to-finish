import "../../styles/sidetrack.css";
const sidetrack = document.createElement("div");
sidetrack.className = "sidetrack";
sidetrack.innerHTML = 
`<div class="all-projects">
<div class="Inbox">Inbox</div>
<div class="projects">
<div class="projects-container">
    <div class="projects-title">Projects</div>
    <div class = "new-project">
        <i class='bx bx-plus'></i>  
    </div>
</div>
<div class="project" id="1">college</div>
</div>
</div>`;
export {sidetrack};