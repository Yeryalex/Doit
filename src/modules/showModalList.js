import { inputNewList } from "./modalFormList.js";

const iconList = document.querySelector(".modal-showlist-icon");

function showListModal() {

    iconList.addEventListener("click", () => {

        const modalContainer = document.createElement("div");
        modalContainer.setAttribute("class", "modal-container");

        inputNewList.forEach((listName) => {
            const list = document.createElement("button");
            list.setAttribute("class", "list-section-unit");
            list.innerText = listName;
            modalContainer.appendChild(list);
            iconList.appendChild(modalContainer);
        })
    })

}

export { showListModal }