import "../styles/main-container.css";
import {header} from "./header"
import { sidetrack } from "./sidetrack";
import { alltasks } from "./alltasks";
const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
mainContainer.appendChild(header);
mainContainer.appendChild(sidetrack);
mainContainer.appendChild(alltasks);
export  {mainContainer};