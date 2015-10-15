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
            callback(response.realms);
        }
    })
};

module.exports = new BlizzardAPI();