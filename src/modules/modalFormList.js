import { localStorage } from "./localStorage.js";
import { inputNewList } from "../index.js";

const listNamesContainer = document.querySelector(".list-names-container");
const addListButton = document.querySelector("#add-list");
const addProjectModal = document.querySelector("#dialog-add-list");
const closeProjectDialog = document.querySelector("#close-dialog");
const modalForm = document.querySelector('[name="registerlist"]');


function displayListSidebar(listName) {

        const container = document.createElement("div");
        const containerSplitter = document.createElement("div");
        const listElement = document.createElement("button");
        const counter = document.createElement("div");
        const deleteList = document.createElement("div");

        container.classList.add("list-counter-container");
        listElement.classList.add("sidebar-list-button");
        containerSplitter.classList.add("container-splitter");
        listElement.innerText = listName;

        containerSplitter.appendChild(listElement);
        containerSplitter.appendChild(counter);
        container.appendChild(containerSplitter);
        container.appendChild(deleteList);
        listNamesContainer.appendChild(container);
        const formTask= document.querySelector("#task-form");

        if (!formTask.children[0].classList.contains("modal-showlist-icon")) {
            formTask.children[0].classList.add("modal-showlist-icon");
        }
}

function handleFormList() {
    
    addListButton.addEventListener("click", () => {
        
        addProjectModal.showModal();
    })
    
    closeProjectDialog.addEventListener("click", () => {
        addProjectModal.close();
    })
    
    modalForm.addEventListener("submit", (e) => {
        
        e.preventDefault();
        
        const listName = e.currentTarget.inputlist.value;

        if (inputNewList.some((element) => element.list === listName)) {
            alert("List already exists!")
            modalForm.reset();
            return ;
        }

        inputNewList.push({list : listName, checked : false});
        
        displayListSidebar(listName);

        localStorage.setItem("inputList", JSON.stringify(inputNewList));

        modalForm.reset();
        addProjectModal.close();
    });
}

export { handleFormList , inputNewList, displayListSidebar}