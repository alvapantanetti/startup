var React = require ('react');
var Button = require ('./button');

var MovieTable = React.createClass({

    propTypes: {
        movies: React.PropTypes.array,
        onDeleteMovie: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            movies: []
        };
    },

    render: function () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.movies.map(this.renderMovies)}
                </tbody>
            </table>
        );
    },

    renderMovies: function (movie, index) {
        return (
            <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td><Button onClick={this.props.onDeleteMovie.bind(this, index)}>Delete</Button></td>
            </tr>
        );
    },

    getButtonProps: function () {
        return {
            onClick: this.handleDeleteMovie
        }
    }

});

module.exports = MovieTable;