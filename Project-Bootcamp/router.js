module.exports = ( function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var MainView = require ('./views/main-view');
    var HeaderView = require ('./views/header-view');
    var RealmView = require ('./views/realm-view');
    var CharacterView = require ('./views/character-view');
    var ChallengerView = require ('./views/challenger-view');
    var PvpView = require ('./views/pvp-view');

    var ModuleRouter = function () {

        this.routes = (
            <Route handler={MainView}>
                <DefaultRoute handler={HeaderView} />
                <Route name='Home' path='home/' handler={HeaderView} />
                <Route name='RealmStatus' path='realm/' handler={RealmView} />
                <Route name='CharacterInformation' path='character/' handler={CharacterView} />
                <route name='ChallengerChart' path='challenger/' handler={ChallengerView} />
                <route name='PvpChart' path='pvp/' handler={PvpView} />
            </Route>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {

        Router.run (this.routes, function (Root) {

            React.render (<Root />, mountElement);
        });
    };

    return new ModuleRouter();
}) ();