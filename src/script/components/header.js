import "../../styles/header.css";

const header = document.createElement("div");
header.classList.add("main-header");
header.innerHTML = `
<div class="header-title-container">
      <i class='bx bx-task-x'></i>
      <div class="header-text">to finish</div>
</div>
<div class = "add-task-button"><i class='bx bx-plus'></i></div>
`;
export { header };