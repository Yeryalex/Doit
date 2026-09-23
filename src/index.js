import "./style.css"
import { taskInfo } from "./modules/taskClass.js";
import { taskToggle, displayTasks, deleteButton, arrayTasks } from "./modules/utils.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const mainTaskContainer = document.querySelector(".main-task-container");
const listProjects = document.querySelector(".projects-name");
const projectIcon = document.querySelector("#Personal");
const addListButton = document.querySelector(".addListButton");

addListButton.addEventListener("click", () => {

    
})


form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    arrayTasks.unshift(new taskInfo(projectIcon.id, title.value, null, null, null));
    displayTasks(arrayTasks, mainTaskContainer);
    console.log(arrayTasks)
    form.reset();
});

taskToggle(mainTaskContainer, arrayTasks);
deleteButton(mainTaskContainer, arrayTasks);