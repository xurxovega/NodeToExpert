const fs = require('fs');
const colors = require('colors');
//module.exports.createFile = (base) => { // o bien con el module.exports del final
let createFile = (base, limit) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)){
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`../base/data/table_${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`table_${base}.txt`);
            //console.log('File saved!!!');
        });
    });
}

let listTable = (base, limit = 10) => {
    console.log(`List Table of ${base}`.green);
    for (let i = 1; i <= limit; i++) {
        console.log( `${base} x ${i} = ${base * i}` );
    }
}

module.exports = {
    createFile,
    listTable
}