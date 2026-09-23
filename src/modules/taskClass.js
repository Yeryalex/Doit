import {format} from "date-fns";



class taskInfo {
 
    constructor(projectName, title, description, dueDate, priority) {
        
        this.projectName = projectName;
        this.title = title;
        this.description = description;
        // this.dueDate = format( dueDate.value ? new Date(dueDate.value) : new Date(), "MMM dd yyyy");
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = self.crypto.randomUUID();
        this.isChecked = false;
    }
    

    getTitle() {
        return(this.title)
    }

    revertCheck() {
        this.isChecked = !this.isChecked;
    }
}

export { taskInfo }