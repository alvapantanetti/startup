var React = require ('react');
var _ = require ('lodash');

var Input = React.createClass({

    propTypes:{
        defaultValue: React.PropTypes.string,
        onChange: React.PropTypes.func,
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },

    getInitialState: function () {
        var initialState = {};

        if ((_.isUndefined(this.props.value))) {
            initialState.value = this.props.defaultValue
        }

        return initialState;
    },

    render: function () {
        return (
            <div>
                <span>{this.props.label}</span>
                <input {...this.getProps()}/>
            </div>
        );
    },

    getProps: function () {
        return {
            value: this.getValue(),
            onChange: this.handleOnChange
        };
    },

    getValue: function () {
        return (_.isUndefined(this.props.value)) ? this.state.value : this.props.value;
    },

    handleOnChange: function (event) {
        var props = this.props;

        if (_.isUndefined(props.value)) {
            this.setState({value: event.target.value});
        }

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }
});

module.exports = Input;