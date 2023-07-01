import "../styles/alltasks.css";
const alltasks = document.createElement("div");
alltasks.className= "all-tasks";
alltasks.innerHTML= 
`<div class="p-container" id="1">
<input type="checkbox" id="task" value="task">
<div class="p-title">some title1</div>
<div class="p-name">project1</div>
</div>
<div class="p-container" id="2">
<input type="checkbox" id="task"  value="task">
<div class="p-title">some title2</div>
<div class="p-name">project2</div>
</div>
<div class="p-container" id="3">
<input type="checkbox" id="task" value="task">
<div class="p-title">some title3</div>
<div class="p-name">project3</div>
</div>`;
export {alltasks};