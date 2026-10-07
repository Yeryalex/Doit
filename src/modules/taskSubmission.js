import { arrayTasks } from "../index.js";
import { inputNewList } from "./modalFormList.js";
import { taskInfo } from "./taskClass.js";
import { displayTasks } from "./utils.js";
import { assignNumberTasks, listCounter} from "./listCounter.js";

const form = document.querySelector("#task-form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const dueDate = document.querySelector("#dueDate");
const priority = document.querySelector("#priority");
const mainTaskContainer = document.querySelector(".main-task-container");
const modalContainer = document.querySelector(".modal-container");
const mainContainer = document.querySelector(".main-container");
const numberTasks = document.querySelector(".number-tasks");        

function activeList(listButtonSelected) {

    const activeList = inputNewList.find((e) => e.list === listButtonSelected.innerText);
    
    inputNewList.forEach((e) => {

        (e.list === activeList.list) ? e.checked = true: e.checked = false;
    })
}

function getListName() {

    modalContainer.addEventListener("click" , (e) => {
        
        modalContainer.style.display = "block";
        const listButtonSelected = e.target.closest(".container-section-unit");
        if (!listButtonSelected) return ;

            activeList(listButtonSelected);
            modalContainer.style.display = "none";
    })
}


function taskSubmission() {
    
    getListName();
    document.body.addEventListener("click", (e) => {

    const clickModal = e.target.closest(".modal-container");
    const iconModal = e.target.closest(".modal-showlist-icon");

    if (iconModal || clickModal) return ;
    modalContainer.style.display = "none";

   })

    form.addEventListener("submit", (e) => {
        
        e.preventDefault();
        
        const allLists = document.querySelectorAll(".list-counter-container");

        assignNumberTasks(numberTasks, arrayTasks.length, 1);

        let listSelected = inputNewList.find((e) => e.checked === true).list;
        arrayTasks.unshift(new taskInfo(listSelected, title.value, null, null, false));
        
        
        displayTasks(arrayTasks, mainTaskContainer);
        listCounter(allLists, listSelected, arrayTasks.filter((e) => e.projectName === listSelected).length);
         
        console.log(arrayTasks)
        form.reset();
    });
}


export { taskSubmission, mainTaskContainer}