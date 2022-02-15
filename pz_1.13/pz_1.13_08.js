class Task {
    constructor(name, description, dateStart, dateFinish) {
        this.name = name;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateFinish;
    }   
    // Будь-яке завдання може мати набір дочірніх підзадач.
    // How to do it better?
}

class DoingTask extends Task { 
    constructor(name, description, dateStart, dateFinish, percentDoing, isTaskInProcess) {
        super(name, description, dateStart, dateFinish)

        this.percentDoing = percentDoing;
        this.isTaskInProcess = isTaskInProcess;
    }
}

