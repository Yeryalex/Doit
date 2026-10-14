import "./style.css"
import { taskToggle, displayTasks, deleteButton } from "./modules/utils.js";
import { handleFormList } from "./modules/modalFormList.js";
import { taskSubmission, mainTaskContainer } from "./modules/taskSubmission.js";
import { showListModal } from "./modules/showModalList.js";
import { displayDescriptionTask } from "./modules/displayDescription.js";
import { tasksByList } from "./modules/tasksByList.js";
import { deleteAllTasks } from "./modules/deleteAll.Task.js";
import { taskInfo } from "./modules/taskClass.js";
import { displayListSidebar } from "./modules/modalFormList.js";
import { assignNumberTasks, listCounter } from "./modules/listCounter.js";

let arrayTasks = [];
let inputNewList = [];

let localStorage = window.localStorage;

// localStorage.clear()

if (localStorage.getItem("arrayTasks")) {

    arrayTasks = JSON.parse(localStorage.getItem("arrayTasks"));
    arrayTasks.forEach((task) => {
        Object.setPrototypeOf(task, taskInfo.prototype);
    });
    
    const allLists = document.querySelectorAll(".container-splitter");
    const numberTasks = document.querySelector(".number-tasks");        

    assignNumberTasks(numberTasks, arrayTasks.length, 0);
        
    displayTasks(arrayTasks, mainTaskContainer);
}

if (localStorage.getItem("inputList")) {

    inputNewList = JSON.parse(localStorage.getItem("inputList"));


    inputNewList.forEach((list) => displayListSidebar(list.list));

    const allLists = document.querySelectorAll(".container-splitter");
    inputNewList.forEach((list) => {
            listCounter(allLists, list.list, arrayTasks.filter((e) => e.projectName === list.list).length);
        })


}else {
   
    inputNewList.push({list : "Personal", checked : true});
    displayListSidebar(inputNewList[0].list);
        const allLists = document.querySelectorAll(".container-splitter");
    inputNewList.forEach((list) => {
            listCounter(allLists, list.list, arrayTasks.filter((e) => e.projectName === list.list).length);
        })
}



showListModal();
tasksByList();
taskSubmission();
taskToggle(mainTaskContainer, arrayTasks);
deleteButton(mainTaskContainer, arrayTasks);
handleFormList();
displayDescriptionTask();
deleteAllTasks();


export { arrayTasks , localStorage, inputNewList}