// class User{
//     constructor(first, last, e) {
//         this.f = first;
//         this.l = last;
//         this.email = e;
//     }
// }

// var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
// console.log(userOne.first);
// console.log(userOne.f);
// console.log(userOne.l);
// console.log(userOne);


class Player{
    constructor(names, numbers, avgPts){
        this.name = names;
        this.number = numbers;
        this.avgPt = avgPts;
    }
}

var playerOne = new Player("Scott", 22, 30);
console.log("player name: " + playerOne.name);
console.log("player number: " + playerOne.number);
console.log("players avg pts: " + playerOne.avgPt);
