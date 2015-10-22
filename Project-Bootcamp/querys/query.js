var $ = require ('jquery');
var _ = require ('lodash');

var Apikey = 'qrmacznjya3vdnynqdr4trf3bd9t3fau';
var Locale = 'en_US';

var BlizzardAPI = function () {

    this.apikey = Apikey;
    this.locale = Locale;
};

BlizzardAPI.prototype.RealmStatus = function (callback) {

    $.ajax({
        url: 'https://us.api.battle.net/wow/realm/status?locale=' + this.locale + '&apikey=' + this.apikey,
        type: 'get',
        datatype: 'json',
        success: function (response) {
            callback (response.realms);
        }
    })
};

BlizzardAPI.prototype.CharacterInfo = function (realm, name, callback) {

    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + this.realm + '/' + this.name
                                                        + '?fields=stats%2C+items%2C+pvp%2C+guild'
                                                        + '&locale=' + this.locale + '&apikey=' + this.apikey,
        type: 'get',
        datatype: 'json',
        success: function (response) {
            console.log(response);
            callback (response);
        }
    })
};

BlizzardAPI.prototype.ChallengerLeaderboard = function (realm, callback) {

    $.ajax({
        url: URL_CHALLENGE_HERE,
        type: 'get',
        datatype: 'json',
        success: function (response) {
            console.log(response);
            callback (response);
        }
    })
};

BlizzardAPI.prototype.PvPLeaderboard = function (bracket, callback) {

    $.ajax({
        url: URL_PVP_HERE,
        type: 'get',
        datatype: 'json',
        success: function (response) {
            console.log(response);
            callback (response);
        }
    })
}

module.exports = new BlizzardAPI();