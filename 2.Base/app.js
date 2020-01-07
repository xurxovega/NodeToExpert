const { createFile, listTable } = require('./multiply/multiply');
const { argv } = require('./config/yargs').argv;
const colorsSafe = require('colors/safe');
//const argv = require('yargs').argv

//console.log(module);
//console.log(process);

//console.log(multiply);
// multiply.createFile --> se puede llamar a la función con la destructuración sin necesidad de indicar el paquete.




let argv2 = process.argv;

//console.log(argv);
let cmd = argv._[0];

switch (cmd) {
    case 'create':
        createFile(argv.base)
            .then(fileName => console.log(`Created File: ${fileName}`))
            .catch(err => console.log(err));
        break;
    case 'list':
        console.log(colorsSafe.red('Fn List:'));
        listTable(argv.base, argv.limit);
        break;        

    default:
        console.log('Opción no disponible');
        break;
}
