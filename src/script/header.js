import "../styles/header.css";

const header = document.createElement("div");
header.classList.add("main-header");
header.innerHTML = `
<div class="header-title-container">
      <img src="#" alt="" class="header-img">
      <div class="header-text">to finish</div>
</div>
<button class="add-task-button">&plus;</button>
`;
export { header };
