import { arrayTasks } from "../index.js";

function assignNumberTasks(component, number, add) {

    component.innerText = number + add;
}

function listCounter(allLists , listSelected, listCount) {
    
    allLists.forEach((nodeList) => {
        if (nodeList.children[0].innerText === listSelected) {

            nodeList.children[1].innerText = listCount;
            nodeList.children[1].classList.add("number-tasks-list");
            
            if (listCount === 0){
                nodeList.children[1].classList.toggle("number-tasks-list");
                nodeList.children[1].innerText = "";
            }
        }
    })
}

export { assignNumberTasks, listCounter}