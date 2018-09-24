 const Task = class Task  {
    constructor(id, task, date) {
       this.id = id,
       this.task = task,
       this.date = date;
       this.done = false;
    }
};
export default Task;
