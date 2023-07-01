import "./styles/normalize.css";
import { mainContainer } from "./script/main-container";
import { taskoverlay } from "./script/taskoverlay";
import { projectoverlay } from "./script/projectoverlay";

const content = document.querySelector("#content");

content.appendChild(mainContainer);
content.appendChild(taskoverlay);
content.appendChild(projectoverlay);
console.log(" to finish");
