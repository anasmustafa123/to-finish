const formHandler = () =>{
    const hideForm = (className) => {
        document.querySelector(className).classList.add("hide");
    };
    const showForm = (className) => {
        document.querySelector(className).classList.remove("hide");
    };
    return {hideForm, showForm};
}
export {formHandler}