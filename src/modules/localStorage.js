// import { inputNewList } from "./modalFormList.js";
// import { arrayTasks } from "../index.js";
import { displayListSidebar } from "./modalFormList.js";
import { displayTasks } from "./utils.js";
import { listCounter, assignNumberTasks} from "./listCounter.js";
import { mainTaskContainer } from "./taskSubmission.js";
import { taskInfo } from "./taskClass.js";

let localStorage = window.localStorage;


function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

function storage(arrayTasks, inputNewList) {

if (storageAvailable("localStorage")) {

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


} 
}

export { localStorage, storage}