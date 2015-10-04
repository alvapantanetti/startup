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