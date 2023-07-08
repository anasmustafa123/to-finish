import {hideForm, showForm} from "./formHandler"

const clearAddLabel = () =>{
    document.getElementById("labelName").value = "";
};
const newLabelName =() =>{
    const labelName = document.getElementById("labelName").value;
    return {labelName};
};
const newLabelNode = (labelName) =>{
    const labelContainer = document.createElement('div');
    labelContainer.className = "label";
    const labelInput =  document.createElement('input');
    const labelNameNode = document.createElement("div");
    labelNameNode.textContent = labelName;
    labelInput.type = "checkbox";
    labelInput.value = labelName;
    labelContainer.appendChild(labelInput);
    labelContainer.appendChild(labelNameNode);
    return labelContainer;
};

const addNewLabelNode = (labelName) =>{
    const addnewlabelButton = document.querySelector(".add-new-label");
    const newLabel = newLabelNode(labelName);
    addnewlabelButton.insertAdjacentElement("beforebegin",newLabel);
};
const hideLabelForm = () => {
    hideForm(".add-label-overlay");
};
const showLabelForm = () => {
    showForm(".add-label-overlay");
};
export {clearAddLabel, newLabelName, showLabelForm, hideLabelForm, addNewLabelNode};