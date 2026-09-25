import { arrayTasks } from "../index.js";
import { inputNewList } from "./modalFormList.js";
import { taskInfo } from "./taskClass.js";
import { displayTasks } from "./utils.js";
// import { getListName } from "./showModalList.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const mainTaskContainer = document.querySelector(".main-task-container");

        
function activeList(listButtonSelected) {

    const activeList = inputNewList.find((e) => e.list === listButtonSelected.innerText);
    
    inputNewList.forEach((e) => {
        if (e.list === activeList.list) {
            e.checked = true;
        }
        else {
            e.checked = false
        }
    })
}

function getListName() {

    const modalContainer = document.querySelector(".modal-container");

    modalContainer.addEventListener("click" , (e) => {

       const listButtonSelected = e.target.closest(".list-section-unit");
       
       if (!listButtonSelected) return ;
        activeList(listButtonSelected);

        // return(inputNewList.find((e) => e.checked === true).list);

    })
}


getListName();
// let listNameSelected = getListName();
// console.log(listNameSelected)

function taskSubmission() {
    
    form.addEventListener("submit", (e) => {
        
        e.preventDefault();

        arrayTasks.unshift(new taskInfo("person al", title.value, null, null, null));
        displayTasks(arrayTasks, mainTaskContainer);
        console.log(arrayTasks)
        form.reset();
    });
}


export { taskSubmission, mainTaskContainer}