/* {
    id: id of User
    name: Name of User
    room: Room where is connect
} */

class Users{

    constructor(){
        this.people = [];
    }

    addPerson(id, name, room){
        let person = { id: id, name: name, room: room};
        this.people.push(person);
        //console.log('Class.AddPerson', person);
        return this.people;
    }

    getPerson(id){
        //console.log('Class.getPerson', id);
        return this.people.filter( p => p.id === id )[0];
    }

    getPeople(){
        return this.people;
    }

    getPersonByRoom(room){
        return this.people.filter(p => p.room === room);
    }

    deletePerson(id){
        let person = this.getPerson(id);
        this.people = this.people.filter(p => p.id != id);
        //console.log('Class.deletePerson', person);
        return person;
    }
}

module.exports = {
    Users
};