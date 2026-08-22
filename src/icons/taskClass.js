import {format} from "date-fns";


export class taskInfo {
 
    constructor(title, description, dueDate, priority) {

        this.title = title;
        this.description = description;
        this.dueDate = format( dueDate.value ? new Date(dueDate.value) : new Date(), "MMM dd yyyy");;
        this.priority = priority;
        this.id = self.crypto.randomUUID();
    }

    getTitle() {
        return(this.title)
    }
}