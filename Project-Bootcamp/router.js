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
            <Route path='/' handler={MainView}>
                <DefaultRoute  name='home' path='home/' handler={HeaderView} />
                <Route name='realm-status' path='realm/' handler={RealmView} />
                <Route name='character-information' path='character/' handler={CharacterView} />
                <route name='challenger-chart' path='challenger/' handler={ChallengerView} />
                <route name='pvp-chart' path='pvp/' handler={PvpView} />
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