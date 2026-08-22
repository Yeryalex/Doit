import "./style.css"
import { taskGenerator } from "./taskGenerator.js"
import {format} from "date-fns"
import { taskInfo } from "./icons/taskClass.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
// const buttonArrow = document.querySelector(".button-arrow");
const taskContainer = document.querySelector(".main-task-container");

const dates = format( dueDate.value ? new Date(dueDate.value) : new Date(), "MMM dd yyyy");


form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    const date = format( dueDate.value ? new Date(dueDate.value) : new Date(), "MMM dd yyyy")
    const task = taskGenerator(title.value, description.value, date, priority.value);
    taskContainer.appendChild(task);

    const test = new taskInfo(title.value, description.value, dates, priority.value);

console.log(test)
console.log(test.getTitle())
});