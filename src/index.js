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
import { storage } from "./modules/localStorage.js";

let arrayTasks = [];
let inputNewList = [];


storage(arrayTasks, inputNewList);
showListModal();
tasksByList();
taskSubmission();
taskToggle(mainTaskContainer, arrayTasks);
deleteButton(mainTaskContainer, arrayTasks);
handleFormList();
displayDescriptionTask();
deleteAllTasks();


export { arrayTasks , inputNewList}