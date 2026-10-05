import { mainTaskContainer } from "./taskSubmission.js"
import { arrayTasks } from "../index.js";


function displayDescriptionTask() {

    const main = document.querySelector("main");

    mainTaskContainer.addEventListener("click", (e) => {

        const taskContainer = e.target.closest(".general-task-container");
        if (!taskContainer) return ;


        console.log("passed");
        arrayTasks.forEach((item) => {
            if (item.id === taskContainer.dataset.ids) {

                const divGeneralContainer = document.createElement("div");
                const formContainer = document.createElement("form");
                const titleInput = document.createElement("input");
                const inputDescription = document.createElement("input");
                const inputDate = document.createElement("input");
                const priority = document.createElement("button");
                const submitButton = document.createElement("p");
                const notesContainer = document.createElement("div");
                const notes = document.createElement("p");
                const titleContainer = document.createElement("div");
                const typeTaskContainer = document.createElement("div");
                const typeTaskLogo = document.createElement("p");
                const typeTask = document.createElement("p");
                typeTask.classList.add("type-task-list");
                typeTaskLogo.classList.add("type-task-logo");
                typeTaskContainer.classList.add("type-task-container");
                typeTask.textContent = `my lists > ${item.projectName}`;

                titleInput.classList.add("title-input");
                inputDate.classList.add("input-date");
                priority.classList.add("priority");
                titleContainer.classList.add("title-container");
                divGeneralContainer.classList.add("description-general-container");
                formContainer.classList.add("form-container-description");
                inputDescription.classList.add("input-description");
                inputDate.classList.add("input-date");
                submitButton.classList.add("edit-submit-button");
                notesContainer.classList.add("notes-container");
                notes.classList.add("notes");

                titleInput.type = "text";
                titleInput.value = item.title;
                inputDescription.type = "text";
                inputDate.type = "date";
                inputDescription.placeholder = "Insert your notes here"
                priority.type = "button";
                priority.innerText = "#Priority";
                submitButton.role = "button";
                submitButton.type = "submit"; ///////////////////////
                notes.innerText = "Notes"


                notesContainer.appendChild(notes);
                notesContainer.appendChild(inputDescription);
                titleContainer.appendChild(titleInput);
                titleContainer.appendChild(inputDate);
                titleContainer.appendChild(priority);

                formContainer.appendChild(titleContainer);
                formContainer.appendChild(notesContainer);
                formContainer.appendChild(submitButton);
                
                typeTaskContainer.appendChild(typeTaskLogo);
                typeTaskContainer.appendChild(typeTask);
                
                divGeneralContainer.appendChild(typeTaskContainer);
                divGeneralContainer.appendChild(formContainer);
                main.appendChild(divGeneralContainer);
            }
        });
    });
}

export { displayDescriptionTask }