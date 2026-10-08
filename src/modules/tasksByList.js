import { displayTasks } from "./utils.js";
import { arrayTasks } from "../index.js";
import { mainTaskContainer } from "./taskSubmission.js";

function tasksByList() {

    const selectedList = document.querySelector(".list-names-container");
    const allMyTasks = document.querySelector(".all-mytasks-section");


    allMyTasks.addEventListener("click", (e) => {

        mainTaskContainer.classList.remove("list-selected-bg");

        displayTasks(arrayTasks, mainTaskContainer);
    })

    selectedList.addEventListener("click", (e) => {

        const nameList = e.target.closest(".list-counter-container");

        if (!nameList) return ;
        mainTaskContainer.classList.add("list-selected-bg");
        const specificTasks = arrayTasks.filter((tasks) => tasks.projectName === nameList.children[0].innerText); 
        displayTasks(specificTasks, mainTaskContainer)
        // console.dir(nameList.children[0].innerText);
    })

}


export { tasksByList }