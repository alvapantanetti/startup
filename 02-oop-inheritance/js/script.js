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

var Movie = function (title,year) {
    this.title = title;
    this.year = year;
    ObserverList.call(this);
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
        var i = 0;
        for (i; i < this.observerList.length; i+=1) {
            this.observerList[i].notifyPlaying(this);
        }
    },

    stopPlaying: function () {
        var i = 0;
        for (i; i < this.observerList.length; i+=1) {
            this.observerList[i].notifyStop(this);
        }
    }
};

var extend = function (destination, source) {
    for (var attribute in source) {
        if(source.hasOwnProperty(attribute)){
            destination[attribute] = source[attribute];
        }
    }
    return destination;
};

extend(Movie.prototype, ObserverList.prototype);


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

var DownloadableMovie = function (title,year) {
    this.title = title;
    this.year = year;
    ObserverList.call(this);
};

DownloadableMovie.prototype = {
    constructor: DownloadableMovie,

    download: function () {
        console.log(this.title + ' Is downloading.');
    }
};

extend(DownloadableMovie.prototype, Movie.prototype);

var Social = {
    share: function (MovieObserver) {
      console.log(MovieObserver.name + ' is sharing ' + this.title + '.' );
    },

    like: function (MovieObserver){
        console.log(MovieObserver.name + ' like ' + this.title + '.' );
    }
};

extend(Movie.prototype, Social);


var ironMan = new Movie('Iron Man',2008);
var ironManTwo = new Movie('Iron Man II',2010);
var ironManThree = new DownloadableMovie('Iron Man III',2013);
var firstobserver = new MovieObserver('John Doe');
var secondobserver = new MovieObserver('Jane Doe');

//ironMan.subscribeObserver(firstobserver);
//ironMan.subscribeObserver(secondobserver);
//
//console.log(ironMan.title,ironMan.year);
//console.log(ironManTwo.title,ironManTwo.year);
//console.log(ironManThree.title,ironManThree.year);
//console.log(firstobserver.name);
//console.log(secondobserver.name);
//console.log(firstobserver.notifyPlaying(ironMan));

