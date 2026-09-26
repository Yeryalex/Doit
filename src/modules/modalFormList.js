const listNamesContainer = document.querySelector(".list-names-container");
const addListButton = document.querySelector("#add-list");
const addProjectModal = document.querySelector("#dialog-add-list");
const closeProjectDialog = document.querySelector("#close-dialog");
const modalForm = document.querySelector("#modal-form");
const inputModal = document.querySelector("#input-modal");

const inputNewList = [{list : "Personal", checked : true}];

function handleFormList() {
    
    addListButton.addEventListener("click", () => {
        
        addProjectModal.showModal();
    })
    
    closeProjectDialog.addEventListener("click", () => {
        addProjectModal.close();
    })
    
    modalForm.addEventListener("submit", (e) => {
        
        e.preventDefault();
        
        const listName = inputModal.value;
        inputNewList.push({list : listName, checked : false});
        const listElement = document.createElement("button");

        listElement.setAttribute("class", "sidebar-list-button");
        listElement.innerText = listName;
        listNamesContainer.appendChild(listElement);

        modalForm.reset();
        addProjectModal.close();
    });
}

export { handleFormList , inputNewList}