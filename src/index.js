import "./style.css"
import { taskGenerator } from "./taskGenerator.js"
import {format} from "date-fns"

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const buttonArrow = document.querySelector(".button-arrow");
const taskContainer = document.querySelector(".task-container");


form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    const date = format(new Date(dueDate.value), "MMM dd yyyy")
    const task = taskGenerator(title.value, description.value, date, priority.value);
    taskContainer.appendChild(task);

});