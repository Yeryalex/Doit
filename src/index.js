import "./style.css"
import { taskToggle, displayTasks, deleteButton } from "./modules/utils.js";
import { handleFormList } from "./modules/modalFormList.js";
import { taskSubmission, mainTaskContainer } from "./modules/taskSubmission.js";
import { showListModal } from "./modules/showModalList.js";
import { displayDescriptionTask } from "./modules/displayDescription.js";

const arrayTasks = [];


showListModal();
taskSubmission();
taskToggle(mainTaskContainer, arrayTasks);
deleteButton(mainTaskContainer, arrayTasks);
handleFormList();
displayDescriptionTask();

export { arrayTasks }