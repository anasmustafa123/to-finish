import { footer } from "./script/footer";
import { header } from "./script/header";
import "./styles/normalize.css";

// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const content = document.querySelector("#content");

content.appendChild(header);

content.appendChild(footer);

console.log(" to do");
