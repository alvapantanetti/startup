var Director = require('./director');

var Movie = function (title, year) {
    this.title = title;
    this.year = year;
};

Movie.prototype = {
    constructor: Movie,

    get: function (attribute) {
        return this[attribute];
    },

    set: function (attribute, value) {
        this[attribute] =  value;
    }
};

module.exports = Movie;
