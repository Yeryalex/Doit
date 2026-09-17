
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

    generalTaskContainer.classList.add("general-task-container");
    svgContainer.classList.add("svg-container");
    checkboxContainer.classList.add("checkbox-container");
    buttonCheck.dataset.ids = id;
    buttonCheck.classList.add("checkbox-button");
    isChecked ?  buttonCheck.classList.toggle("svg-style") : buttonCheck.classList.toggle("noChecked");
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

    generalTaskContainer.appendChild(checkboxContainer);
    generalTaskContainer.appendChild(taskContainer);
    return (generalTaskContainer);
}