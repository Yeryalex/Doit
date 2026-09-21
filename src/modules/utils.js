import { taskGenerator } from "./taskGenerator.js";

const arrayTasks = [];

const taskToggle = (mainTaskContainer, arrayTasks) => {
    
    mainTaskContainer.addEventListener("click", (e) => {
        
        const checkButton = e.target.closest(".svg-container");
        if (!checkButton) return ;
        
        const taskContainer = e.target.closest(".general-task-container");
        
        arrayTasks.forEach((task) => {
            
            if (task.id === taskContainer.dataset.ids) {
                task.revertCheck();
            }
        });
            
        checkButton.classList.toggle("svg-style");
        checkButton.classList.toggle("noChecked");
        
        const deleteButton = taskContainer.querySelector(".button-selection");
        const deleteButtonContainer = taskContainer.querySelector(".delete-button-container")
        
        deleteButton.classList.toggle("delete-button");
        deleteButtonContainer.classList.toggle("style-button-container");
    })
}

const displayTasks = (arrayTasks, mainTaskContainer) => {
    
    while (mainTaskContainer.firstChild) {
        mainTaskContainer.removeChild(mainTaskContainer.firstChild);
    }

    arrayTasks.forEach((e) => {
        const task = taskGenerator(e.title, e.description, e.dueDate, e.priority, e.id, e.isChecked);
        mainTaskContainer.appendChild(task);
    });
    // console.log(arrayTasks)
}

const deleteButton = (mainTaskContainer, arrayTasks) => {
    
    mainTaskContainer.addEventListener("click", (e) => {
        
        const deleteButton = e.target.closest(".delete-button");
        if (!deleteButton) return  ;
        
        const taskContainer = e.target.closest(".general-task-container");

        arrayTasks.forEach((element, index) => {
            
            if (element.id === taskContainer.dataset.ids) {
                
                arrayTasks.splice(index, 1);
                displayTasks(arrayTasks, mainTaskContainer);
            }
        });

    })

}

export {taskToggle, displayTasks, deleteButton, arrayTasks}