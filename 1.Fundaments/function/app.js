function append(a, b) {
    return a + b;
}
console.log(append(1, 2));

let append2 = (a, b) => {
    return a + b;
}
console.log(append2(1, 2));

let append3 = (a, b) => a + b;
console.log(append3(1, 2));  


function salute() {
    return 'Hola Mundo';
}
console.log(salute());

let salute2 = () => 'Hola Mundo';
console.log(salute2());

let salute3 = name => `Hola ${name}`;
console.log(salute3('Darío'));


let deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'Regeneration',
    getName() {
        return `${this.name} ${this.surname} - power: ${this.power}`
    }
};
console.log(deadpool.getName());