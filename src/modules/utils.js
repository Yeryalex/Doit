import { taskGenerator } from "./taskGenerator.js";


const taskToggle = (mainTaskContainer) => {
    mainTaskContainer.addEventListener("click", (e) => {
    
        // const taskContainer = e.target.closest(".general-task-container");
        // const h3Text = taskContainer.querySelector("h3");
    
        // h3Text.innerHTML = `<h3><del>${h3Text.innerText}</del></h3>`;
        // console.log(h3Text.innerText)
    
        const checkButton = e.target.closest(".checkbox-button");
    
        if (!checkButton) return ;
    
        checkButton.classList.toggle("svg-style");
    })
    }


    function displayTasks(arrayTasks, mainTaskContainer) {

        arrayTasks.forEach((e) => {
            const task = taskGenerator(e.title, e.description, e.dueDate, e.priority);
                mainTaskContainer.appendChild(task);
        });
    
        console.log(arrayTasks)
    }

    export {taskToggle, displayTasks}