var React = require ('react');
var _ = require ('lodash');
var $ = require ('jquery');
var Button = require ('../components/button');
var Input = require ('../components/input');
var Table = require ('../components/table');
var BlizzardAPI = require ('../querys/query');

var ChallengerView = React.createClass({

    getInitialState: function () {
        return {
            challengers: []
        }
    },

    render: function () {
        return (
            <div>
                <div>
                    <h3><u>Top 10 challenger leaderboard</u></h3>
                    <p>Fill the realm, and then press the button to checkout the challenger leaderboards.</p>
                    <Input label="Realm" type="text" onChange{this.handleInputChange.bind (this, 'realm')} />
                    <Button {this.getButtonProps()} />
                </div>
                <div>
                    <Table rows={this.state.challengers} columns={['top', 'character']} />
                </div>
            </div>
        )
    },

    handleInputChange: function () {
        var newState = {};

        if  (event.target.value){
            newState[type] = event.target.value;
            this.setState(newState);
        }
    },

    getButtonProps: function () {
        return{
            className: 'btn btn-info',
            onClick: this.handleChallengerRequest,
            value: 'Challenger Top 10'
        }
    },

    handleChallengerRequest: function () {
        BlizzardAPI.ChallengerLeaderboard(this.realm, this.refreshChallengerLeaderboard);
    },

    refreshChallengerLeaderboard: function (challengers) {
        this.setState({challengers: challengers});
    }
});

module.exports = ChallengerView;