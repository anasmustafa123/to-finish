import "../../styles/labeloverlay.css";
const labeloverlay = document.createElement('div');
labeloverlay.classList.add("add-label-overlay");
labeloverlay.classList.add("hide");
labeloverlay.innerHTML = 
`<form class="add-label-form">
<div class="add-label-header">
    <button type="button" class="cansel-add-label">cancel</button>
    <div class="add-project-title">Add Label</div>
    <button type = "submit" class="add-label">add</button>
</div>
<input type="text" placeholder="name" name="label-name" id = "labelName" required>
</form>
`;
export {labeloverlay};