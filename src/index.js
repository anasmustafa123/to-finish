import "./styles/normalize.css";
import { mainContainer } from "./script/components/main-container";
import { taskoverlay } from "./script/components/taskoverlay";
import { projectoverlay } from "./script/components/projectoverlay";
import { labeloverlay } from "./script/components/labeloverlay";
import { overlayContainer } from "./script/components/taskContent";

const content = document.querySelector("#content");
content.appendChild(mainContainer);
content.appendChild(taskoverlay);
content.appendChild(projectoverlay);
content.appendChild(labeloverlay);
content.appendChild(overlayContainer);
import { displayController } from "./script/functions/displayController"; 
displayController();

console.log(" to finish");