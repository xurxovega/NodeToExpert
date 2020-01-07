const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('create', 'Create File', options)
    .command('list', 'Create File', options)
    .help()
    argv;

module.exports = {
    argv
}