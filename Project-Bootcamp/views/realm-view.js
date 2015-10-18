var React = require ('react');
var _ = require ('lodash');
var $ = require ('jquery');
var Table = require ('../components/table');
var Button = require ('../components/button');
var BlizzardAPI = require ('../querys/query');

var RealmView = React.createClass ({

    getInitialState: function () {

        return {
            realms: []
        }
    },

    render: function () {

        return (
            <div>
                <div>
                    <Button {...this.getButtonProps()} />
                </div>
                <div>
                    <Table rows={this.state.realms} columns={['status', 'name', 'type', 'population']} />
                </div>
            </div>
        )
    },

    getButtonProps: function () {

        return {
            className: 'btn btn-info',
            onClick: this.handleRealmRequest,
            value: 'Realm status'
        }
    },

    handleRealmRequest: function () {

        BlizzardAPI.RealmStatus(this.refreshRealms);
    },

    refreshRealms: function (realms) { //this catchs the callback from the query RealmStatus

        this.setState({realms: realms})
    }
});

module.exports = RealmView;