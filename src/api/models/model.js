const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const moviesSchema = new Schema(
    {
        title: {type: 'string', required: true},
        director: {type: 'string'},
        year: {type: 'number'},
        genre: {type: 'string'},
    },{
        timestamps: true
    }
);


const Movie = mongoose.model('movie', moviesSchema);  // ponemos movie en singular para que añada "s"

module.exports = Movie;