var React = require ('react');
var _ = require ('lodash');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func
    },

    render: function () {
        return (
            <button {...this.getProps()}>{this.props.children}</button>
        );
    },

    getProps: function () {
        return {
            onClick: this.handleOnClick
        }
    },

    handleOnClick: function (event) {
        if (this.props.onClick){
            this.props.onClick(event)
        }
    }
});

module.exports = Button;
