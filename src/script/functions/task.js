function task(name,description,date,priority,label,project = "inbox"){
    this.name = name;
    this.date = date;
    this.description = description;
    this.priority = priority;
    this.label = label;
    this.subTasks = [];
    this.project= project;
    this.finished = false;
    this.addSubTask = function(){
        subTasks.push(task);
    };
};
export {task};