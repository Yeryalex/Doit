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
 
            const list = document.createElement("button");
            list.classList.add("list-section-unit");
            list.innerText = listName.list;
            modalContainButtons.appendChild(list);
            modalContainer.style.display = "block";
        })
    }
}


function showListModal() {

    iconList.addEventListener("click", handleIconShowsModal);
    iconList.addEventListener("keyup", handleIconShowsModal);
}

export { showListModal }