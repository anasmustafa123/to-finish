
const hideForm = (className) => {
    document.querySelector(className).classList.add("hide");
};
const showForm = (className) => {
    document.querySelector(className).classList.remove("hide");
};
export {hideForm, showForm};
