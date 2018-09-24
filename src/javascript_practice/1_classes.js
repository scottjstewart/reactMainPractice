console.log('Classes file');

class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    status(){
        console.log('Current status ' + this.type);
    }
}
var anonDude = new User('Anonymous dude');

anonDude.greet();
anonDude.status();

var jeff = new User('jeff');
jeff.greet();
jeff.status();

