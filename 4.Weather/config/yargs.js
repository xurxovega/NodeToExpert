const argv = require('yargs')
    .options({
        city: {
            alias: 'c',
            desc: 'City to get Weather',
            demand: true
        }
    }).help()
    .argv;

module.exports = {
    argv
}