const fs = require('fs');

let taskArray = [];

let createTask = (description) => {
    return new Promise ((resolve, reject) => {

        if(!description || description === null || !String(description) ) {
            reject('Description not null');
            return;
        }else{
            let task = {
                description,
                complete: false
            }
            loadDataJson();
            taskArray.push(task);
            saveDataJson();
            resolve(`Task ${description} created!!!`);
        }
    })
}


let loadDataJson = () => {
    try {
        taskArray = require('../data/data.json');
    } catch (error) {
        taskArray = [];
    }
}


let listTaskToDo = (complete) => {
    loadDataJson();
    if (!complete){
        return taskArray;
    }else{
        return taskArray.filter(task => String(task.complete) === String(complete) );
    }

}


let completeTask = (description, complete= true) => {
    loadDataJson();

    let index = taskArray.findIndex( task => task.description === description );
    if (index >= 0){
        taskArray[index].complete = complete;
        saveDataJson();
        return true;
    }else{
        return false;
    }
}


let saveDataJson = () => {
    let data = JSON.stringify(taskArray);

    fs.writeFile('./data/data.json', data, err => {
        if (err) {
            reject(`Task not saved ${err}`);
            return;
        }
    });
}


let deleteTask = (description) => {
    loadDataJson();

/*     if (taskArray) {
        let taskFind = taskArray.filter(task => task.description === description );
        if (taskFind){
            taskArray.pop(taskFind);
            saveDataJson();
            return true;
        } else {
            return false;
        }
    }else{
        return false;
    } */

    if (taskArray) {
        let taskArrayNew = taskArray.filter(task => task.description !== description);
        if (taskArrayNew.length != taskArray.length){
            taskArray = taskArrayNew;
            saveDataJson();
            return true;
        }else{
            return false;
        }
    } else {
        return false;
    }
}

module.exports = {
    createTask,
    listTaskToDo,
    completeTask,
    deleteTask
}