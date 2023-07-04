import "../../styles/taskoverlay.css";
const taskoverlay = document.createElement("div");
taskoverlay.classList.add("add-task-overlay");
taskoverlay.classList.add("hide");
taskoverlay.innerHTML =   
` <form class = "add-task-form">
<input type="text" id="taskName" name="task-name" placeholder="Task Name" required>
<input type="text" name="description" id="description" placeholder="description">
<div class="input-button-container">
    <div class="date-container">
        <img src="#" alt="" class="date-img">
        <input type="date" name="date" id="date" required>
    </div>
    <div class="priority-container">
        <img src="#" alt="" class="priority-img">
        <div class="priority-text">Priority 4</div>
        <ul class="priority-list">
            <li id="1">prioirty 1</li>
            <li id="2">prioirty 2</li>
            <li id="3">prioirty 3</li>
            <li id="4">prioirty 4</li>
        </ul>
    </div>
    <div class="label-container">
        <img src="" alt="" class="label-img">
        <div class="label-text">Labels</div>
        <div class="num-of-labels">0</div>
        <ul class="label-list">
            <div class="label"><input type="checkbox" name="" id="" value ="some label1">some label1</div>
            <div class="label"><input type="checkbox" name="" id="" value ="some label2">some label2</div>
            <div class="add-new-label">
              <button type="button" class="add-label-button">new</button>
            </div>
        </ul>
    </div>
    <div class="more-container">
        <img src="" alt="" class="more-img">
        <div class="more-text">&mldr;</div>
    </div>
</div>
<div class="add-task-footer">
    <select class="project-container" name="project" id="project">
        <option value="inbox">Inbox</option>
    </select>
    <div>
        <button type = "button"class="cansel-add-task">Cansel</button>
        <button type = "submit" class="addTask"> Add task </button>  
    </div>
</div>
</form> 
`;
export { taskoverlay };