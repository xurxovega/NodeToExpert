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
    return new Promise((resolve, reject) => {
        let employDB = employes.find(employ => employ.id === id)
        if (!employDB) {
            reject(`No existe empleado con id ${id} .`)
        } else {
            resolve(employDB);
        }
    });
}

let getSalary = (employDB) => {
    return new Promise((resolve, reject) => {
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


let getInfo = async(id) => {
    let employ = await getEmploy(id);
    let salary = await getSalary(employ);
    //console.log(salary);
    return `${salary.name} tiene un salario de ${salary.ammount}` ;
}
/*
getInfo(3).then(msg => {
    console.log(msg);
}).catch(e => {console.log(e);});
*/


let getEmploy1 = async (id) => {
    let employDB = employes.find(employ => employ.id === id)
    if (!employDB) {
        throw new Error(`No existe empleado con id ${id} .`);
    } else {
        return employDB;
    }
}

let getSalary1 = async (employDB) => {
    let salaryDB = salaries.find(salary => salary.id === employDB.id)
    if (!salaryDB) {
        throw new Error(`No existe salario para el usuario ${employDB.name}.`);
    } else {
        return{
            name: employDB.name,
            ammount: salaryDB.ammount
        };
    }
}


let getInfo1 = async (id) => {
    let employ = await getEmploy1(id);
    let salary = await getSalary1(employ);
    return `${salary.name} tiene un salario de ${salary.ammount}`;
}

getInfo1(3).then(msg => {
    console.log(msg);
}).catch(e => { 
    console.log(e); 
});