import "../../styles/projectoverlay.css";
const projectoverlay = document.createElement("div");
projectoverlay.classList.add("add-project-overlay");
projectoverlay.classList.add("hide");
projectoverlay.innerHTML = 
`<form class="add-project-form">
<div class="add-project-header">
    <button type="button" class="cansel-add-project">cancel</button>
    <div class="add-project-title"><i class='bx bx-git-repo-forked' ></i>Add Project</div>
    <button type = "submit" class="add-project">add</button>
</div>
<input type="text" placeholder="name" name="project-name" id = "projectName" required>
</form>
`;
export {projectoverlay};