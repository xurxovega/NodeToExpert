const argv = require('./config/yargs');
const colors = require('colors');
const { createTask, listTaskToDo, completeTask, deleteTask } = require('./core/task');

let cmd = argv.argv._[0].toLowerCase();

switch (cmd) {
    case 'create': 
        createTask(argv.argv.description)
            .then(msg => console.log(msg))
            .catch(err => console.log(err));
        break;

    case 'list':
 
        let taskToDo = listTaskToDo(argv.argv.complete);
        //console.log(taskToDo);
        console.log('***** Task *****'.blue);
        for (let task of taskToDo){
            console.log(`Task: ${task.description} - Status: ${ (task.complete ? 'Done'.green : 'Not Done'.red) }`);
        }
        console.log('****************'.blue);
        break;

    case 'done':
        let done = completeTask(argv.argv.description, argv.argv.complete);
        console.log(done);
        break;

    case 'delete':
        let del =  deleteTask(argv.argv.description);
        console.log(`Registro ${ (del === true ? 'borrado'.green : 'no borrado'.red) }`);
        break;
        
    default:
        console.log('Command not reconozing');
        break;
}