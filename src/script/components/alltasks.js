import "../../styles/alltasks.css";
const alltasks = document.createElement("div");
alltasks.className= "all-tasks";
alltasks.innerHTML= 
` <div class="p-container" id="1">
<div class="task-first-line">
    <input type="checkbox" id="task" value="task">
    <div class="p-title">some title1</div>
    <div class="labels-list">
        <div class="label">hj</div>
        <div class="label">adfs</div>
    </div>
</div>
<div class="task-second-line">
    <div class="p-name">project1</div>
</div>
</div>`;
export {alltasks};