
let getName = async () => { 
    // undefined.nombre // para disparar error
    //throw new Error('No existe nombre para ese usuario');
    return 'Darío 1';
}
console.log(getName());


// el async devuelve una promise tal y como:
let getName2 =  () => {
    return new Promise((resolve, reject) => {
        resolve('Darío 2');
    })
}
console.log(getName2());


getName().then(name => {
    console.log(name + 'b');
}).catch(e => {
    console.log('Error async', e);
});



// el async devuelve una promise tal y como:
let getName3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Darío 3');
        }, 3000);
        
    })
}
getName3().then(name => {
    console.log(name);
}).catch(e => {
    console.log('Error async', e);
});

let salute = async () => {
    let name = await getName();
    return `Hola ${name}.`;
}

salute().then(msg => {
    console.log(msg);
}).catch(e => {
    console.log('Error async', e);
});
