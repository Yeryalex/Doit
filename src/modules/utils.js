import { taskGenerator } from "./taskGenerator.js";
import { arrayTasks } from "../index.js";

const taskToggle = (mainTaskContainer, arrayTasks) => {
    
    mainTaskContainer.addEventListener("click", (e) => {
        
        const checkButton = e.target.closest(".checkbox-button");
        if (!checkButton) return ;
        
        const svgContainer = checkButton.querySelector(".svg-container");
        const taskContainer = e.target.closest(".general-task-container");
        
        arrayTasks.forEach((task) => {
            
            if (task.id === taskContainer.dataset.ids) {
                task.revertCheck();
                if (task.isChecked){
                    svgContainer.classList.toggle("svg-style");
                    svgContainer.style.scale = "1";
                    checkButton.style.border = "none";
                }
                else {
                    svgContainer.classList.toggle("svg-style");
                    svgContainer.style.scale = "0";
                    checkButton.style.border = "1px solid rgb(75, 75, 75)";
                }
            }
        });
            

        
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
        const task = taskGenerator(e.title, e.id, e.isChecked);
        mainTaskContainer.appendChild(task);
    });
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