import "./style.css"
import { taskGenerator } from "./taskGenerator.js"
import { taskInfo } from "./icons/taskClass.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const mainTaskContainer = document.querySelector(".main-task-container");

const arrayTasks = [];

mainTaskContainer.addEventListener("click", (e) => {

    const checkButton = e.target.closest(".checkbox-button");

    if (!checkButton) return ;

    checkButton.classList.toggle("svg-style");
})

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    while (mainTaskContainer.firstChild) {
        mainTaskContainer.removeChild(mainTaskContainer.firstChild);
    }

    arrayTasks.push(new taskInfo(title.value, description.value, dueDate.value, priority.value));

    displayTasks();

});

function displayTasks() {

    arrayTasks.forEach((e) => {
        const task = taskGenerator(e.title, e.description, e.dueDate, e.priority, e.id, e.isChecked);
            mainTaskContainer.appendChild(task);
    });

    console.log(arrayTasks)
}