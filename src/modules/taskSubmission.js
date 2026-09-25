import { arrayTasks } from "../index.js";
import { inputNewList } from "./modalFormList.js";
import { taskInfo } from "./taskClass.js";
import { displayTasks } from "./utils.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const mainTaskContainer = document.querySelector(".main-task-container");

function taskSubmission() {
    
    form.addEventListener("submit", (e) => {
        
        e.preventDefault();

        const listValue = document.querySelector(".list-section-unit");
        arrayTasks.unshift(new taskInfo(listValue.innerText, title.value, null, null, null));
        displayTasks(arrayTasks, mainTaskContainer);
        console.log(arrayTasks)
        form.reset();
    });
}


export { taskSubmission, mainTaskContainer}