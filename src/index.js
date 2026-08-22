import "./style.css"
import { taskGenerator } from "./taskGenerator.js"
import { taskInfo } from "./icons/taskClass.js";
// import {format} from "date-fns";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
// const buttonArrow = document.querySelector(".button-arrow");
const taskContainer = document.querySelector(".main-task-container");
// const dates = format( dueDate.value ? new Date(dueDate.value) : new Date(), "MMM dd yyyy");


const arrayTasks = [];

form.addEventListener("submit", (e) => {
    
    e.preventDefault();

    arrayTasks.push(new taskInfo(title.value, description.value, dueDate.value, priority.value));


    arrayTasks.forEach((e) => {
        const task = taskGenerator(e.title, e.description, e.dueDate, e.priority);
        taskContainer.appendChild(task);
    });

    const checkboxButton = document.querySelector(".checkbox-button");

    checkboxButton.addEventListener("click", () => {
        const svgContainer= document.querySelector(".svg-container");
        checkboxButton.style.backgroundColor = "gray";
        svgContainer.classList.add("svg-style");
    });
    console.log(arrayTasks)
});
