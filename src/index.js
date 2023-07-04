import "./styles/normalize.css";
import { mainContainer } from "./script/components/main-container";
import { taskoverlay } from "./script/components/taskoverlay";
import { projectoverlay } from "./script/components/projectoverlay";
import { labeloverlay } from "./script/components/labeloverlay";
const content = document.querySelector("#content");
content.appendChild(mainContainer);
content.appendChild(taskoverlay);
content.appendChild(projectoverlay);
content.appendChild(labeloverlay);
import { displayController } from "./script/functions/displayController"; 
displayController();

console.log(" to finish");