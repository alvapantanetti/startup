var React = require ('react');
var _ = require ('lodash');

var Input = React.createClass({

    propTypes:{
        defaultValue: React.PropTypes.string,
        onChange: React.PropTypes.func,
        value: React.PropTypes.string,
        type: React.PropTypes.string
    },

    getInitialState: function () {
        var initialState = {};

        if (_.isUndefined(this.props.value)) {
            initialState.value = this.props.defaultValue
        }

        return initialState;
    },

    render: function () {
        return (
            <div>
                <label>{this.props.label}</label>
                <input {...this.getProps()} />
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