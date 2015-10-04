(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Director = function (name) {
    this.name = name;
    this.quotes = [];

};

Director.prototype = {
    constructor: Director,

    get: function (attribute) {
        return this[attribute];
    },

    set: function (attribute, value) {
        this[attribute] =  value;
    },

    addQuotes: function (quote) {
        this.quotes.push(quote);
    },

    speak: function () {
        var index = 0;
        for (index; index < this.quotes.length; index +=1) {
            console.log(this.name + ' says: ' + '\"' + this.quotes[index] + '\"' );
        }
    }
};

module.exports = Director;
},{}],2:[function(require,module,exports){
var Director = require('./director');

var Movie = function (title,year) {
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
},{"./director":1}]},{},[2]);
