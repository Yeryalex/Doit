export function taskGenerator(title, description, dueDate, priority) {
    
    const taskContainer = document.createElement("div");
    const tagSection = document.createElement("div");
    const ptitle = document.createElement("h3");
    const pdescription = document.createElement("h5");
    const pdate = document.createElement("h6");
    const ppriority = document.createElement("h6");


    taskContainer.classList.add("task");
    tagSection.classList.add("tag-section");
    pdate.classList.add("pdate");
    ppriority.classList.add("ppriority");
    ptitle.innerText = title;
    pdescription.innerText = description;
    pdate.innerText = dueDate;
    ppriority.innerText = priority;

    taskContainer.appendChild(ptitle);
    taskContainer.appendChild(pdescription);
    tagSection.appendChild(pdate);
    tagSection.appendChild(ppriority);
    taskContainer.appendChild(tagSection);

    return (taskContainer);
}