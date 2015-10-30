var React = require ('react');
var _ = require ('lodash');
var $ = require ('jquery');
var Button = require ('../components/button');
var Input = require ('../components/input');
var List = require ('../components/list');
var BlizzardAPI = require ('../querys/query');

var CharacterView = React.createClass ({

    getInitialState: function () {
        return {
            character: {}
        }
    },

    render: function () {
        return (
            <div>
                <div>
                    <h3><u>Character basic information form</u></h3>
                    <p>Fill the form with the character name and realm.</p>
                    <Input label='Name' type="text" onChange={this.handleInputChange.bind (this, 'name')} />
                    <Input label='Realm' type="text" onChange={this.handleInputChange.bind (this, 'realm')} />
                    <Button {...this.getButtonProps()} />
                </div>
                <div>
                    <h3><small>Basic Information</small></h3>
                    {this.renderCharacterThumbnail()}
                    <List items={this.getListItems()} />
                </div>
            </div>
        )
    },

    handleInputChange: function (type, event) {
        var newState = {};

        if  (event.target.value){
            newState[type] = event.target.value;
            this.setState(newState);
        }
    },

    getButtonProps: function () {
        return {
            className: 'btn btn-info',
            onClick: this.handleCharacterRequest,
            value: 'Character status'
        }
    },

    handleCharacterRequest: function () {
        BlizzardAPI.CharacterInfo(this.state.realm, this.state.name, this.refreshCharacterInfo);
    },

    refreshCharacterInfo: function (character) {
        this.setState({character: character});
    },

    renderCharacterThumbnail: function () {
        var thumbnailSrc = (this.props.character.thumbnail) ? 'http://us.battle.net/static-render/us/' +
                                                            this.props.character.thumbnail : 'defaultPath';
        return (
            <img  className="img-thumbnail" src={thumbnailSrc} alt="Character thumbnail" />
        );
    },

    getListItems: function () {
        return null;
    }
});

module.exports = CharacterView;