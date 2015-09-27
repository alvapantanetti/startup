var Movie = function (title,year){
    this.title = title;
    this.year = year;
    this.observerList = [];

    this.get = function (attribute){
        return this[attribute];
    };
    this.set = function (attribute, value){
      this[attribute]= value;
    };
    this.startplaying = function (){
        for( i = 0; i < observerList.Count; i++) {
            observerList[i].notifyplaying(this);
        };
    };
    this.stopPlaying = function(){
        for( i = 0; i < observerList.Count; i++) {
            observerList[i].notifyStop(this);
        };
    };
    this.subscribeObserver = function(observer){
        this.observerList.push(observer);
    };
    this.unsubscribeObserver = function (observer){
        this.observerList.splice(this.observerList.indexOf(observer), 1);
    };
};

var MovieObserver = function(name){
    this.name = name;

    this.notifyplaying = function(name){
        console.log(this.name + ' says: ' + Movie.title + ' is playing.');
    };

    this.notifyStop = function(name){
        console.log(this.name + ' says: ' + Movie.title + ' stopped.');
    };
};


var ironMan = new Movie('Iron Man',2008);
var ironManTwo = new Movie('Iron Man II',2010);
var ironManThree = new Movie('Iron Man III',2013);
var firstobserver = new MovieObserver('John Doe');
var secondobserver = new MovieObserver('Jane Doe');

ironMan.subscribeObserver(firstobserver);
ironMan.subscribeObserver(secondobserver);

console.log(ironMan.title,ironMan.year);
console.log(ironManTwo.title,ironManTwo.year);
console.log(ironManThree.title,ironManThree.year);
console.log(firstobserver.name);
console.log(secondobserver.name);


