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
const modalContainer = document.querySelector(".modal-container");
const mainContainer = document.querySelector(".main-container");
        
function activeList(listButtonSelected) {

    const activeList = inputNewList.find((e) => e.list === listButtonSelected.innerText);
    
    inputNewList.forEach((e) => {

        (e.list === activeList.list) ? e.checked = true: e.checked = false;
    })
}

function getListName() {


    mainTaskContainer.addEventListener("click", (e) => {

        const boundary = e.target.closest(".modal-container");

        if (!boundary) modalContainer.style.display = "none";

    })

    modalContainer.addEventListener("click" , (e) => {
        
        const listButtonSelected = e.target.closest(".list-section-unit");

        if (!listButtonSelected) return ;
        
        activeList(listButtonSelected);
        modalContainer.style.display = "none";
    })
}

function taskSubmission() {
    
    getListName();
   
    form.addEventListener("submit", (e) => {
        
        e.preventDefault();

        let listSelected = inputNewList.find((e) => e.checked === true).list;
        arrayTasks.unshift(new taskInfo(listSelected, title.value, null, null, null));
        displayTasks(arrayTasks, mainTaskContainer);
        console.log(arrayTasks)
        form.reset();
    });
}


export { taskSubmission, mainTaskContainer}