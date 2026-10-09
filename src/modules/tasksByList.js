import { displayTasks } from "./utils.js";
import { arrayTasks } from "../index.js";
import { mainTaskContainer } from "./taskSubmission.js";


function taskGeneratorSpecific(projectName, title, id, isChecked, priority) {

    const generalTaskContainer = document.createElement("div");
    const svgContainer = document.createElement("div");
    const taskContainer = document.createElement("div");
    const headerBar = document.createElement("div"); 
    const priorityBar = document.createElement("div"); 
    // const typeTaskContainer = document.createElement("div");
    // const typeTaskLogo = document.createElement("p");
    // const typeTask = document.createElement("p");
    const ptitle = document.createElement("h3");
    const checkboxContainer = document.createElement("div");
    const buttonCheck = document.createElement("button");
    const deleteButtonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");


    generalTaskContainer.classList.add("general-task-container");
    generalTaskContainer.setAttribute("name", projectName);
    generalTaskContainer.dataset.ids = id;
    svgContainer.classList.add("svg-container");
    checkboxContainer.classList.add("checkbox-container");
    buttonCheck.classList.add("checkbox-button");
    deleteButton.setAttribute("class", "button-selection");
    deleteButtonContainer.setAttribute("class", "delete-button-container");
    headerBar.classList.add("header-bar");
    // typeTask.classList.add("type-task-list");
    // typeTaskLogo.classList.add("type-task-logo");
    // typeTaskContainer.classList.add("type-task-container");

    if (isChecked) {

        buttonCheck.style.border = "none";
        svgContainer.classList.toggle("svg-style");
        svgContainer.style.scale = "1";
        deleteButton.classList.toggle("delete-button");
        deleteButtonContainer.classList.toggle("style-button-container");
    }

    if (priority) {
        priorityBar.classList.add("priority-bar");
        priorityBar.style.height = "4px"
        priorityBar.style.width = "30%"
        priorityBar.style.marginTop = "5px"

        // priorityBar.innerText = "Priority"
    }

    taskContainer.classList.add("task");
    // tagSection.classList.add("tag-section");
    // pdate.classList.add("pdate");
    // ppriority.classList.add("ppriority");
    ptitle.classList.add("title-task")
    // pdescription.classList.add("description-task")
    

    // typeTask.textContent = `my lists > ${projectName}`;
    ptitle.innerText = title;
    // pdescription.innerText = description;
    // pdate.innerText = dueDate;
    // ppriority.innerText = priority;

    // typeTaskContainer.appendChild(typeTaskLogo);
    // typeTaskContainer.appendChild(typeTask);

    buttonCheck.appendChild(svgContainer);
    checkboxContainer.appendChild(buttonCheck);
    // headerBar.appendChild(typeTaskContainer);
    headerBar.appendChild(priorityBar);
    taskContainer.appendChild(ptitle);
    taskContainer.appendChild(headerBar);

    // taskContainer.appendChild(pdescription);
    // tagSection.appendChild(pdate);
    // tagSection.appendChild(ppriority);
    // taskContainer.appendChild(tagSection);
    deleteButtonContainer.appendChild(deleteButton)

    generalTaskContainer.appendChild(checkboxContainer);
    generalTaskContainer.appendChild(taskContainer);
    generalTaskContainer.appendChild(deleteButtonContainer);

    return (generalTaskContainer);
}

const displayTasksSpecific = (arrayTasks, mainTaskContainer) => {
    
    while (mainTaskContainer.firstChild) {
        mainTaskContainer.removeChild(mainTaskContainer.firstChild);
    }

       
        if (arrayTasks.length)
        {
                    const titleProject = document.createElement("h3");

            titleProject.classList.add("title-project");
            titleProject.innerText = `${arrayTasks[0].projectName} List`;
        
        mainTaskContainer.appendChild(titleProject);
        }
    arrayTasks.forEach((e) => {
        const task = taskGeneratorSpecific(e.projectName , e.title, e.id, e.isChecked, e.priority);
        mainTaskContainer.appendChild(task);
    });
}


function tasksByList() {

    const selectedList = document.querySelector(".list-names-container");
    const allMyTasks = document.querySelector(".all-mytasks-section");


    allMyTasks.addEventListener("click", (e) => {

        mainTaskContainer.classList.remove("list-selected-bg");

        displayTasks(arrayTasks, mainTaskContainer);
    })

    selectedList.addEventListener("click", (e) => {

        const nameList = e.target.closest(".list-counter-container");

        if (!nameList || !arrayTasks.length) return ;
        mainTaskContainer.classList.add("list-selected-bg");
        
        
        const specificTasks = arrayTasks.filter((tasks) => tasks.projectName === nameList.children[0].innerText); 

        
        displayTasksSpecific(specificTasks, mainTaskContainer)
    })

}


export { tasksByList, displayTasksSpecific }