import '../../styles/taskContent.css'
const overlayContainer = document.createElement('div');
overlayContainer.classList.add('overlay-container');
overlayContainer.classList.add('hide');
overlayContainer.innerHTML = `
<section class="taskContent-container hide">
        <div class="taskContent-header">
            <div class="taskContent-addSubTask">
                <i class='bx bx-plus' ></i>
                add sub task
            </div>
            <i class='bx bx-x-circle textContent-cansel-task'></i>
        </div>
        <div class="taskContent-taskName">
            <input type="checkbox" name="task" id="" >
            <p class="taskContent-taskName-name">task name</p>
        </div>
        <div class="taskContent-grid-container">
            <div class="taskContent-input-container">
                <textarea name="description" id="description" cols="30" rows="10" class="taskContent-description" placeholder="description...." readonly></textarea>
                <div class="textContent-comment-container">
                    <textarea name="comment" id="comment" cols="30" rows="10" class="taskContent-comment" placeholder="comment....." readonly></textarea>
                    <div class="textContent-comment-submit">Comment</div>
                </div>

            </div>
            <div class="taskContent-projectContent">
                <div class="taskContent-box">
                    <h2 class="taskContent-box-title">Project</h2>
                    <div class="taskContent-box-container">
                        <i class='bx bxs-building' ></i>
                        <p class="taskContent-box-content">important task</p>
                    </div>
                </div>
                <div class="taskContent-box">
                    <h2 class="taskContent-box-title">Due Date</h2>
                    <div class="taskContent-box-container">
                        <i class='bx bx-timer'></i>
                        <p class="taskContent-box-content">2-12-2002</p>
                    </div>
                </div>
                <div class="taskContent-box">
                    <h2 class="taskContent-box-title">priority</h2>
                    <div class="taskContent-box-container">
                        <i class='bx bxs-purchase-tag' ></i>
                        <p class="taskContent-box-content">priority 1</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="taskContent-updateContent">Update</div>
    </section>`;
export {overlayContainer};