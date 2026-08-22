import checker from "./icons/check.svg"

const checkerIcon = '<svg class="checker-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'

export function taskGenerator(title, description, dueDate, priority) {

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
    buttonCheck.classList.add("checkbox-button");
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
    console.log("---------------------",checker)
    return (generalTaskContainer);
}