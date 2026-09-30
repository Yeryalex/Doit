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

        if (inputNewList.some((element) => element.list === listName)) {
            alert("List already exists!")
            modalForm.reset();
            return ;
        }

        inputNewList.push({list : listName, checked : false});
        
        const container = document.createElement("div");
        const listElement = document.createElement("button");
        const counter = document.createElement("div");

        container.classList.add("list-counter-container");
        listElement.classList.add("sidebar-list-button");
        counter.classList.add("number-tasks-list");

        counter.textContent = "0";
        listElement.innerText = listName;

        container.appendChild(listElement);
        container.appendChild(counter);
        listNamesContainer.appendChild(container);

        modalForm.reset();
        addProjectModal.close();
    });
}

export { handleFormList , inputNewList}