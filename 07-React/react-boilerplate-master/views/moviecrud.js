var React = require ('react');
var _ = require ('lodash');
var Movie = require ('../lib/movie');
var MovieTable = require ('../components/movietable');
var Input = require ('../components/input');
var Button = require ('../components/button');

var MovieCRUD = React.createClass ({

    getInitialState: function () {
        return {
            title: '',
            year: '',
            movies: []
        };
    },

    render: function () {
        return (
            <div>
                <h1>Movie DataBase</h1>
                <Input label='Title' onChange={this.handleInputChange.bind(this, 'title')}/>
                <Input label='Year' onChange={this.handleInputChange.bind(this, 'year')}/>
                <Button {...this.getButtonProps()}>New Movie!</Button>
                <MovieTable movies={this.state.movies} onDeleteMovie={this.handleDeleteMovie}/>
            </div>
        );
    },

    getButtonProps: function () {
        return {
            onClick: this.handleNewMovie
        }
    },

    handleInputChange: function (type, event) {
        var newState = {};

        newState[type] = event.target.value;
        this.setState(newState);
    },

    handleNewMovie: function () {
        var movie = new Movie(this.state.title, this.state.year);
        var movies = this.state.movies;

        movies.push(movie);
        this.setState({movies: movies});
    },

    handleDeleteMovie: function (index) {
        var movies = this.state.movies;

        movies.splice(index, 1);
        this.setState({movies:movies});
    }
});

module.exports = MovieCRUD;