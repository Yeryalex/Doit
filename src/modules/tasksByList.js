import { displayTasks } from "./utils.js";
import { mainTaskContainer } from "./taskSubmission.js";
import { assignNumberTasks, listCounter } from "./listCounter.js";
import { arrayTasks, inputNewList, localStorage } from "./localStorage.js";

function taskGeneratorSpecific(projectName, title, id, isChecked, priority) {

    const generalTaskContainer = document.createElement("div");
    const svgContainer = document.createElement("div");
    const taskContainer = document.createElement("div");
    const headerBar = document.createElement("div"); 
    const priorityBar = document.createElement("div"); 
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
    }

    taskContainer.classList.add("task");
    ptitle.classList.add("title-task")

    ptitle.innerText = title;

    buttonCheck.appendChild(svgContainer);
    checkboxContainer.appendChild(buttonCheck);
    headerBar.appendChild(priorityBar);
    taskContainer.appendChild(ptitle);
    taskContainer.appendChild(headerBar);
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
    
    if (arrayTasks.length) {
        
        const titleProject = document.createElement("h3");
        titleProject.classList.add("title-project");
        titleProject.innerText = `${arrayTasks[0].projectName} List`;
        mainTaskContainer.appendChild(titleProject);
        
        arrayTasks.forEach((e) => {
            const task = taskGeneratorSpecific(e.projectName , e.title, e.id, e.isChecked, e.priority);
            mainTaskContainer.appendChild(task);
        });
    }
    else {
        const titleProject = document.createElement("h3");
        titleProject.classList.add("title-project");
        titleProject.innerText = `${mainTaskContainer.attributes[1].value} List`;
        noTasksMessage(mainTaskContainer);
        mainTaskContainer.appendChild(titleProject);
    }
}

function noTasksMessage(mainTaskContainer) {
    
    mainTaskContainer.textContent = "";

    const messageNoTasks = document.createElement("p");
    messageNoTasks.classList.add("message-no-task");
    messageNoTasks.innerText = "There are not tasks";

    mainTaskContainer.appendChild(messageNoTasks);
}

function clearNoTaskMessage(mainTaskContainer) {
    if (mainTaskContainer) mainTaskContainer.remove();
}

function indexRemoving(arrayTasks, projectName) {

    let pos = null;
    arrayTasks.forEach((task, index) => {
        if (task.projectName === projectName) {
            pos = index;
            return ;
        }
    })
    return (pos >= 0 ? (pos) : (null));
}

function tasksByList() {

    const selectedList = document.querySelector(".list-names-container");
    const allMyTasks = document.querySelector(".all-mytasks-section");
    const listForm = document.querySelector(".modal-showlist-icon");

    allMyTasks.addEventListener("click", (e) => {

        mainTaskContainer.classList.remove("list-selected-bg");
        listForm.classList.add("modal-showlist-icon");

        if (arrayTasks.length) {
            displayTasks(arrayTasks, mainTaskContainer)
        }
        else {
            noTasksMessage(mainTaskContainer);
            setTimeout(() => {
            clearNoTaskMessage(mainTaskContainer.children[0]);
        }, "2000");
        }
    })


    selectedList.addEventListener("mouseenter", () => {
            const list = document.querySelectorAll(".list-counter-container")

        list.forEach((li) => {

        li.addEventListener("mouseenter", () => {

           li.children[1].classList.add("delete-list");
        })

    })
    list.forEach((li) => {

        li.addEventListener("mouseleave", () => {

           li.children[1].classList.remove("delete-list");
        })

    })
    })

    selectedList.addEventListener("click", (e) => {

        const listNameContainer = e.target.closest(".list-counter-container");  
        
        if (!listNameContainer) return ;

        const deleteButtonList = e.target.closest(".delete-list");

        if (deleteButtonList) { 
            const projectName = listNameContainer.children[0].children[0].innerText;
            
          while (indexRemoving(arrayTasks, projectName) !== null) {
            arrayTasks.splice(indexRemoving(arrayTasks, projectName), 1);
          }
        
        inputNewList.forEach((list, index) => {
            if (list.list === projectName) {

                inputNewList.splice(index, 1);
            }
        })

        localStorage.setItem("arrayTasks", JSON.stringify(arrayTasks));
        localStorage.setItem("inputList", JSON.stringify(inputNewList));

          const allLists = document.querySelectorAll(".container-splitter");

         const numberTasks = document.querySelector(".number-tasks");        

        assignNumberTasks(numberTasks, arrayTasks.length, 0);
        listCounter(allLists, projectName, arrayTasks.filter((e) => e.projectName === projectName).length);
        
        mainTaskContainer.classList.remove("list-selected-bg")
        listNameContainer.remove();

        displayTasks(arrayTasks, mainTaskContainer);
        }

        const nameList = e.target.closest(".container-splitter");            

        if (!nameList ) return ;

        if (!arrayTasks.some((item) => item.projectName === nameList.children[0].innerText)){
            
            listForm.classList.remove("modal-showlist-icon");
            mainTaskContainer.classList.add("list-selected-bg");
            mainTaskContainer.setAttribute("name", nameList.children[0].innerText);

            displayTasksSpecific([], mainTaskContainer);
            return ;
        }
       
        listForm.classList.remove("modal-showlist-icon");
        mainTaskContainer.classList.add("list-selected-bg");
        mainTaskContainer.setAttribute("name", nameList.children[0].innerText);
        const specificTasks = arrayTasks.filter((tasks) => tasks.projectName === nameList.children[0].innerText); 
        displayTasksSpecific(specificTasks, mainTaskContainer)
    })

}

export { tasksByList, displayTasksSpecific }