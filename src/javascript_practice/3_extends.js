class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User";
    }
    greet(){
        console.log('Weclome Back, ' + this.name);
    }
    status(){
        console.log('Current Status, ' + this.type);
    }
}

class TrialUser extends User{
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

var anonDude = new User ('Anonymous');
anonDude.greet();
anonDude.status();

var trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User{
    urBanned(){
        console.log('User banned because you, ' + this.name + ' hit scott on his motorcycle');
    }
}



var bannedUser = new BannedUser('Elizabeth');
bannedUser.greet();
bannedUser.urBanned();
bannedUser.status();

