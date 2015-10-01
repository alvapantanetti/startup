var ObserverList = function () {
    this.observerList = [];
};

ObserverList.prototype = {

    constructor: ObserverList,

    subscribeObserver: function (observer) {
        this.observerList.push(observer);
    },

    unsubscribeObserver: function (observer) {
        this.observerList.splice(this.observerList.indexOf(observer), 1);
    }
};

var Movie = function (title,year,observer) {
    this.title = title;
    this.year = year;
    ObserverList.call(observer);
};

Movie.prototype = {

    constructor: Movie,

    get: function (attribute) {
        return this[attribute];
    },

    set: function (attribute, value) {
        this[attribute] =  value;
    },

    startplaying: function () {
        for( i = 0; i < observerList.length ; i++) {
            observerList[i].notifyPlaying(this);
        }
    },

    stopPlaying: function () {
        for( i = 0; i < observerList.length; i++) {
            observerList[i].notifyStop(this);
        }
    }
};

var MovieObserver = function (name) {
    this.name = name;
};

MovieObserver.prototype = {

    constructor: MovieObserver,

    notifyPlaying: function (Movie) {
        console.log(this.name + ' says: ' + Movie.title + ' is playing.');
    },

    notifyStop: function (Movie) {
        console.log(this.name + ' says: ' + Movie.title + ' stopped.');
    }
};


var ironMan = new Movie('Iron Man',2008);
var ironManTwo = new Movie('Iron Man II',2010);
var ironManThree = new Movie('Iron Man III',2013);
var firstobserver = new MovieObserver('John Doe');
var secondobserver = new MovieObserver('Jane Doe');

ironMan.observerList.subscribeObserver(firstobserver);
ironMan.observerList.subscribeObserver(secondobserver);

console.log(ironMan.title,ironMan.year);
console.log(ironManTwo.title,ironManTwo.year);
console.log(ironManThree.title,ironManThree.year);
console.log(firstobserver.name);
console.log(secondobserver.name);


