export function taskGenerator(title, description, dueDate, priority) {
    
    const taskContainer = document.createElement("div");
    const ptitle = document.createElement("p");
    const pdescription = document.createElement("p");
    const pdate = document.createElement("p");
    const ppriority = document.createElement("p");


    taskContainer.classList.add("task");
    ptitle.innerText = title;
    pdescription.innerText = description;
    pdate.innerText = dueDate;
    ppriority.innerText = priority;

    taskContainer.appendChild(ptitle);
    taskContainer.appendChild(pdescription);
    taskContainer.appendChild(pdate);
    taskContainer.appendChild(ppriority);

    return (taskContainer);
}