import { arrayTasks } from "../index.js";
import { listCounter } from "./listCounter.js";
import { inputNewList } from "../index.js";
import { assignNumberTasks } from "./listCounter.js";
import { displayTasks } from "./utils.js";
import { mainTaskContainer } from "./taskSubmission.js";
import { displayTasksSpecific } from "./tasksByList.js";


function deleteAllTasks() {

    const deleteAllButton = document.querySelector(".delete-all");

    deleteAllButton.addEventListener("click", () => {

        arrayTasks.splice(0, arrayTasks.length);

        localStorage.setItem("arrayTasks", JSON.stringify(arrayTasks));
        const allLists = document.querySelectorAll(".container-splitter");

        const numberTasks = document.querySelector(".number-tasks");        

        assignNumberTasks(numberTasks, arrayTasks.length, 0);
       
        inputNewList.forEach((list) => {
            
            listCounter(allLists, list.list, arrayTasks.filter((e) => e.projectName === list.list).length);
        })

        const projectName = inputNewList.filter(e => e.checked === true);
        const specificTasks = arrayTasks.filter((tasks) => tasks.projectName === projectName.list); 

        mainTaskContainer.classList.contains("list-selected-bg") ? displayTasksSpecific(specificTasks, mainTaskContainer) :
        displayTasks(arrayTasks, mainTaskContainer);

    });
}

export { deleteAllTasks }