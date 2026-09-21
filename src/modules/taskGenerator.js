
export function taskGenerator(title, description, dueDate, priority, id, isChecked) {

    const generalTaskContainer = document.createElement("div");
    const svgContainer = document.createElement("div");
    const taskContainer = document.createElement("div");
    const tagSection = document.createElement("div");
    const ptitle = document.createElement("h3");
    const pdescription = document.createElement("h5");
    const pdate = document.createElement("h6");
    const ppriority = document.createElement("h6");
    const checkboxContainer = document.createElement("div");
    const buttonCheck = document.createElement("button");
    const deleteButtonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");

    generalTaskContainer.classList.add("general-task-container");
    generalTaskContainer.dataset.ids = id;
    svgContainer.classList.add("svg-container");
    checkboxContainer.classList.add("checkbox-container");
    buttonCheck.classList.add("checkbox-button");
    isChecked ?  svgContainer.classList.toggle("svg-style") : svgContainer.classList.toggle("noChecked");
    deleteButton.setAttribute("class", "button-selection");
    deleteButtonContainer.setAttribute("class", "delete-button-container");

    if (isChecked) {
        
        deleteButton.classList.toggle("delete-button");
        deleteButtonContainer.classList.toggle("style-button-container");
    }

    taskContainer.classList.add("task");
    tagSection.classList.add("tag-section");
    pdate.classList.add("pdate");
    ppriority.classList.add("ppriority");

    ptitle.innerText = title;
    pdescription.innerText = description;
    pdate.innerText = dueDate;
    ppriority.innerText = priority;

    buttonCheck.appendChild(svgContainer);
    checkboxContainer.appendChild(buttonCheck);
    taskContainer.appendChild(ptitle);
    taskContainer.appendChild(pdescription);
    tagSection.appendChild(pdate);
    tagSection.appendChild(ppriority);
    taskContainer.appendChild(tagSection);
    deleteButtonContainer.appendChild(deleteButton)

    generalTaskContainer.appendChild(checkboxContainer);
    generalTaskContainer.appendChild(taskContainer);
    generalTaskContainer.appendChild(deleteButtonContainer);
    return (generalTaskContainer);
}