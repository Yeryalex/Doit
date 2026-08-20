import "./style.css"
// import arrowUp from "./icons/arrow-up.svg"
import { message } from "./home.js"

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const buttonInput = document.querySelector(".button-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e)
    console.log(title.value);
    console.log(description.value);
    console.log(dueDate.value);
    console.log(priority.value);
});