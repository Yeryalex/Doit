import { arrayTasks } from "../index.js";

function assignNumberTasks(component, number, add) {

    component.innerText = number + add;
}

function listCounter(allLists , listSelected, listCount) {
    
    allLists.forEach((nodeList) => {
        
        if (nodeList.children[0].innerText === listSelected) {
            nodeList.children[1].innerText = listCount;
        }
    })
}

export { assignNumberTasks, listCounter}