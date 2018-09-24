class User {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Trial User";
    }
    greet(){
        console.log('Weclome Back, ' + this.name);
    }
    status(){
        console.log('Current Status, ' + this.type);
    }
}

var anonDude = new User ('Anonymous');
anonDude.greet();
anonDude.status();


class BronzeLevelUser extends User {
    constructor(username, password, ccinfo) {
        super(username, password);
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo)
    }
}

var bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze22324', '444444444');
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);
