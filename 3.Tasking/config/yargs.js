const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of Task'
}

const complete = {
    alias: 'c',
    //default: true,
    desc: 'Marks as Done a Task'
}
const argv = require('yargs')
    .command('create', 'Create a Task To Do', { description })
    .command('list', 'List Task', { complete })
    .command('done', 'Mark as Complete a Task', { description, complete })
    .command('delete', 'Delete a Task by Description', { description } )    
    .help()
    .argv;


module.exports = {
    argv
}