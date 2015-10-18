var React = require('react');
var _ = require ('lodash');

var List = React.createClass ({

    propTypes: {
        items: React.PropTypes.array
    },

    getDefaultProps: function () {

        return {
            items: []
        };
    },

    render: function () {

        return (
            <ul>
                {this.props.items.map(this.renderItem)}
            </ul>
        );
    },

    renderItem: function (item, index) {

        return (
            <li key={index}>{item}</li>
        );
    }
});

module.exports = List;