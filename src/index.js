import "./style.css"
import { taskInfo } from "./modules/taskClass.js";
import { taskToggle, displayTasks } from "./modules/utils.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const mainTaskContainer = document.querySelector(".main-task-container");

const arrayTasks = [];

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    while (mainTaskContainer.firstChild) {
        mainTaskContainer.removeChild(mainTaskContainer.firstChild);
    }

    arrayTasks.unshift(new taskInfo(title.value, description.value, dueDate.value, priority.value));

    displayTasks(arrayTasks, mainTaskContainer);
    form.reset();
});

taskToggle(mainTaskContainer, arrayTasks);