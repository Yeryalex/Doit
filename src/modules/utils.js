import { taskGenerator } from "./taskGenerator.js";


const taskToggle = (mainTaskContainer, arrayTasks) => {
   
    mainTaskContainer.addEventListener("click", (e) => {
    

        const checkButton = e.target.closest(".checkbox-button");
        
        if (!checkButton) return ;

        arrayTasks.forEach((el) => {
                if (el.id === e.target.dataset.ids) {
                    el.revertCheck();
                }
            });


    
        checkButton.classList.toggle("svg-style");
    })
    }


    function displayTasks(arrayTasks, mainTaskContainer) {

        arrayTasks.forEach((e) => {
            const task = taskGenerator(e.title, e.description, e.dueDate, e.priority, e.id, e.isChecked);
                mainTaskContainer.appendChild(task);
        });
    
        console.log(arrayTasks)
    }

    export {taskToggle, displayTasks}


            // const taskContainer = e.target.closest(".general-task-container");
        // const h3Text = taskContainer.querySelector("h3");
    
        // h3Text.innerHTML = `<h3><del>${h3Text.innerText}</del></h3>`;
        // console.log(h3Text.innerText)