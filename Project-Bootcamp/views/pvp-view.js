var React = require ('react');
var _ = require ('lodash');
var $ = require ('jquery');
var Button = require ('../components/button');
var Table = require ('../components/table');
var BlizzardAPI = require ('../querys/query');

var PvpView = React.createClass ({

    getInitialState: function () {

        return {
            pvp: []
        }
    },

    render: function () {

        return (
            <div>
                <div>
                    <h3><u>Top 10 pvp leaderboard</u></h3>
                    <p>Fill the bracket, and then press the button to checkout the pvp leaderboards.</p>
                    <Input label="Bracket" type="text" onChange{this.handleInputChange.bind (this, 'bracket')} />
                    <Button {this.getButtonProps()} />
                </div>
                <div>
                    <Table rows={this.state.pvp} columns={['top', 'character']} />
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

        return {
            className: 'btn btn-info',
            onClick: this.handlePvpRequest,
            value: 'PvP Top 10'
            }
    },

    handlePvpRequest: function () {

        BlizzardAPI.PvPLeaderboard(this.bracket, this.refreshPvpLeaderboard);
    },

    refreshPvpLeaderboard: function (pvp) {

        this.setState({pvp: pvp});
    }
});

module.exports = PvpView;