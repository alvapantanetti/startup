var $ = require ('jquery');
var _ = require ('lodash');

var API_KEY = 'qrmacznjya3vdnynqdr4trf3bd9t3fau';
var LOCALE = 'en_US';

var BlizzardAPI = function (apikey, locale) {
    this.apikey = apikey || API_KEY;
    this.locale = locale || LOCALE;
};

BlizzardAPI.prototype.RealmStatus = function (callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/realm/status?locale=' + this.locale + '&apikey=' + this.apikey,
        type: 'get',
        dataType: 'json',
        success: function (response) {
            callback (response.realms);
        }
    })
};

BlizzardAPI.prototype.CharacterInfo = function (realm, name, callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + realm + '/' + name +
                                                        '?fields=stats%2C+items%2C+pvp%2C+guild' +
                                                        '&locale=' + this.locale + '&apikey=' + this.apikey,
        type: 'get',
        dataType: 'json', //jsonp
        success: function (response) {
            console.log(response);
            callback(response);
        }
    })
};

BlizzardAPI.prototype.ChallengerLeaderboard = function (realm, callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/challenge/' + realm + '?locale=' + this.locale +
                                                        '&apikey=' + this.apikey,
        type: 'get',
        dataType: 'json',
        success: function (response) {
            console.log (response);
            callback (response);
        }
    })
};

BlizzardAPI.prototype.PvPLeaderboard = function (bracket, callback) {
    $.ajax({
        url: URL_PVP_HERE,//TODO: get url from the api docs
        type: 'get',
        dataType: 'json',
        success: function (response) {
            console.log (response);
            callback (response);
        }
    })
}

module.exports = new BlizzardAPI();