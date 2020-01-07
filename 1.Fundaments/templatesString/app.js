let name = 'DeadPool';
let real = 'Wade Winston';

console.log(name + ': ' + real);

console.log(`${name}: ${real}`);

function getName() {
    return `${name}: ${real}`;
}

console.log(`El nombre de: ${getName()}`);