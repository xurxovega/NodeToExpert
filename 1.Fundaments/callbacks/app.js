
/*
setTimeout( function() {
    console.log('Hola Mundo');
}, 3000);

setTimeout( () => {
    console.log('Hola Mundo');
}, 3000);
*/

let getUserById = (id, callback) => {
    let user = {
        name: 'Darío',
        id: id
    }
    if(id === 20){
        callback(`User with id ${id} not exists`);
    }else{
        callback(null, user);
    }
    
}

getUserById(10, (err, user)=>{
    if(err){
        return console.log(err);
    }
    console.log('User on DB', user);
})