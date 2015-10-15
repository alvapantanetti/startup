var React = require('react');
var _ = require('lodash');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func,
        value: React.PropTypes.string
    },

    render: function() {
        return(
            <div>
                <button {...this.getProps()}>{this.props.value}</button>
            </div>
        );
    },

    getProps: function () {
        return {
            onClick: this.handleClick,
            className: this.props.className
        }
    },

    handleClick: function (event) {
        if(this.props.onClick) {
            this.props.onClick(event)
        }
    }
});

module.exports = Button;