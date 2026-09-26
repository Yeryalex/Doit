import { inputNewList } from "./modalFormList.js";

const iconList = document.querySelector(".modal-showlist-icon");

function showListModal() {

    iconList.addEventListener("click", () => {

        const modalContainer = document.querySelector(".modal-container");
        const modalContainButtons = document.querySelector(".modal-contain-buttons");
       
        while (modalContainButtons.firstChild) {
            modalContainButtons.removeChild(modalContainButtons.firstChild);
        }

        inputNewList.forEach((listName) => {
 
            const list = document.createElement("button");
            list.setAttribute("class", "list-section-unit");
            list.innerText = listName.list;
            modalContainButtons.appendChild(list);
            modalContainer.style.display = "block";
        })
    });
    
}

export { showListModal  }