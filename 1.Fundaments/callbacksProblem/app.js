let employes = [{
    id: 1,
    name: 'Darío'
},{
    id: 2,
    name: 'Jorge'
},{
    id: 3,
    name: 'Vega'
}]

let salaries = [{
    id:1,
    ammount: 1000
},{
    id: 2,
    ammount: 2000
}]

let getEmploy = (id, callback) => {
    let employDB = employes.find( employ =>  employ.id === id)

    if(!employDB){
        callback(`No existe empleado con id ${id} .`)
    }else{
        callback(null, employDB);
    }
}

/*
getEmploy(20, (err, employDB) => {
    if(err){
        return console.log(err);
    }
    console.log(employDB);
});
*/

let getSalary = (employDB, callback) => {
    let salaryDB = salaries.find( salary => salary.id === employDB.id)

    if (!salaryDB) {
        callback(`No existe salario para el usuario ${employDB.name}.`)
    } else {
        callback(null, 
            {
            name: employDB.name,
            ammount: salaryDB.ammount
        });
    }
    //console.log(salaryDB);
}


getEmploy(3, (err, employDB) => {
    if (err) {
        return console.log(err);
    }else{
        getSalary(employDB, (err, res) => {
            if (err){
                return console.log(err);
            }else{
                return console.log(`El salario de ${res.name} es de ${res.ammount} .`); 
            }
        });
    }
    //console.log(employDB);
});