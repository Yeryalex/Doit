import "./style.css"
import { message } from "./home.js"

const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const buttonInput = document.querySelector(".button-input");

buttonInput.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(title.value);
    console.log(description.value);
    console.log(dueDate.value);
    console.log(priority.value);
});