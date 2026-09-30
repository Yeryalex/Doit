import { inputNewList } from "./modalFormList.js";

const iconList = document.querySelector(".modal-showlist-icon");
const modalContainer = document.querySelector(".modal-container");
const modalContainButtons = document.querySelector(".modal-contain-buttons");

function handleIconShowsModal(event) {
   
    if (event.type === "click" || event.key === "Enter") {
                
        if (modalContainer.style.display === "block") {
            modalContainer.style.display = "none";
            return ;
        }

        while (modalContainButtons.firstChild) {
            modalContainButtons.removeChild(modalContainButtons.firstChild);
        }

        inputNewList.forEach((listName) => {
 
            const container = document.createElement("div");
            const containerTemplate = document.createElement("div");
            const list = document.createElement("button");
            const checkIcon = document.createElement("div");

            container.classList.add("container-section-unit");
            containerTemplate.classList.add("container-template");  
            list.classList.add("list-section-unit");

            if (listName.checked) {
                checkIcon.classList.toggle("icon-section-unit");
            }

            list.innerText = listName.list;

            container.appendChild(list);
            container.appendChild(checkIcon);
            containerTemplate.appendChild(container);
            modalContainButtons.appendChild(containerTemplate);
            modalContainer.style.display = "block";
        })
    }
}


function showListModal() {

    iconList.addEventListener("click", handleIconShowsModal);
    iconList.addEventListener("keyup", handleIconShowsModal);
}

export { showListModal }