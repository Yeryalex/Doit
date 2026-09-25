import { inputNewList } from "./modalFormList.js";
// import { mainTaskContainer } from "./taskSubmission.js";

const iconList = document.querySelector(".modal-showlist-icon");

function showListModal() {

    iconList.addEventListener("click", () => {

        const modalContainer = document.querySelector(".modal-container");
        while (modalContainer.firstChild) {
            modalContainer.removeChild(modalContainer.firstChild);
        }

        inputNewList.forEach((listName) => {
 
            const list = document.createElement("button");
            list.setAttribute("class", "list-section-unit");
            list.innerText = listName;
            modalContainer.appendChild(list);
            modalContainer.style.display = "block";

        })
    });
    
}

export { showListModal }