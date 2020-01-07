let employes = [{
    id: 1,
    name: 'Darío'
}, {
    id: 2,
    name: 'Jorge'
}, {
    id: 3,
    name: 'Vega'
}]

let salaries = [{
    id: 1,
    ammount: 1000
}, {
    id: 2,
    ammount: 2000
}]



let getEmploy = (id) => {

    return new Promise( (resolve, reject) => {

        let employDB = employes.find(employ => employ.id === id)

        if (!employDB) {
            reject(`No existe empleado con id ${id} .`)
        } else {
            resolve(employDB);
        }
    });
}

/*
getEmploy(20).then(
    employ => {
        console.log('Empleado de DB', employ);
    },
    (err) => {
        console.log(err);
    });
*/

let getSalary = (employDB) => {

    return new Promise( (resolve, reject) => {

        let salaryDB = salaries.find(salary => salary.id === employDB.id)

        if (!salaryDB) {
            reject(`No existe salario para el usuario ${employDB.name}.`)
        } else {
            resolve({
                name: employDB.name,
                ammount: salaryDB.ammount
            });
        }
    });
}

/*
getEmploy(2).then(
    employ => {
        getSalary(employ).then(
            salary => {
                console.log(`Salario de ${salary.name} es ${salary.ammount}.`);
            }, err => console.log(err)
        ) ;
    },
    (err) =>console.log(err)
);
*/

// Promesas encadenadas

getEmploy(1).then(
    employ => {
        return getSalary(employ);
    }).then(salary => {
        console.log(`Salario de ${salary.name} es ${salary.ammount}.`);
    }).catch(err => {console.log(err);})