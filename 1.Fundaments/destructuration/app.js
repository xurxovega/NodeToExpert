let deadpool = {
    name: 'Wade',
    surname: 'Winston',
    power: 'Regeneration',
    getName: function () {
        return `${this.name} ${this.surname} - power: ${this.power}`   
    }
};

console.log(deadpool.getName());

/*
let name = deadpool.name;
let surname = deadpool.surname;
let power = deadpool.power;
*/

let { name: firstName, surname, power } = deadpool;

console.log(firstName, surname, power);

