import "./style.css"
import { taskToggle, displayTasks, deleteButton } from "./modules/utils.js";
import { handleFormList } from "./modules/modalFormList.js";
import { taskSubmission, mainTaskContainer } from "./modules/taskSubmission.js";

const arrayTasks = [];


taskSubmission();
taskToggle(mainTaskContainer, arrayTasks);
deleteButton(mainTaskContainer, arrayTasks);
handleFormList();

export { arrayTasks }