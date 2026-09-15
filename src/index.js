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

    // console.log(e.target.dataset.id);
    if (e.target.matches(".checkbox-button") ) {
        
        const svgContainer= document.querySelectorAll(".svg-container");
        // checkboxButton.style.backgroundColor = "gray";

        svgContainer.forEach((e) => e.classList.add("svg-style"));
        // svgContainer.classList.add("svg-style");
    }
})

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    mainTaskContainer.textContent = "";
    arrayTasks.push(new taskInfo(title.value, description.value, dueDate.value, priority.value));


    arrayTasks.forEach((e) => {
        const task = taskGenerator(e.title, e.description, e.dueDate, e.priority, e.id);
            mainTaskContainer.appendChild(task);
    });

    console.log(arrayTasks)
});