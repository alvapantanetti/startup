var React = require ('react');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired
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
        this.props.onClick(event);
    }
});

module.exports = Button;
