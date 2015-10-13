var React = require('react');
var _ = require('lodash');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func
    },

    render: function() {
        return(
            <div>
                <button type="button" class="btn btn-info" {...this.getProps()}>{this.props.children}</button>
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
        if(this.props.onClick){
            this.props.onClick(event)
        }
    }
});

module.exports = Button;