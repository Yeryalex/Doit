const listNamesContainer = document.querySelector(".list-names-container");
const addListButton = document.querySelector("#add-list");
const addProjectModal = document.querySelector("#dialog-add-list");
const closeProjectDialog = document.querySelector("#close-dialog");
const modalForm = document.querySelector('[name="registerlist"]');

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
        
        const listName = e.currentTarget.inputlist.value;
        inputNewList.push({list : listName, checked : false});
        const listElement = document.createElement("button");

        listElement.classList.add("sidebar-list-button");
        listElement.innerText = listName;
        listNamesContainer.appendChild(listElement);

        modalForm.reset();
        addProjectModal.close();
    });
}

export { handleFormList , inputNewList}