import "../styles/sidetrack.css";
const sidetrack = document.createElement("div");
sidetrack.className = "sidetrack";
sidetrack.innerHTML = 
`<div class="all-projects">
<div class="Inbox">Inbox</div>
<div class="projects">
<div class="projects-container">
    <div class="projects-title">Projects</div>
    <button class="new-project">&plus;</button>
</div>
<div class="project" id="1">projectName1</div>
<div class="project" id="2">projectName2</div>
<div class="project" id="3">projectName3</div>
<div class="project" id="4">projectName4</div>
<div class="project" id="5">projectName5</div>
</div>
</div>`;
export {sidetrack};