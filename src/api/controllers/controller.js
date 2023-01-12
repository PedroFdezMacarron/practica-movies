const Movie = require('../models/model');

// Crear un endpoint get que devuelva todas las películas.
const  getAllMovies = async(req, res) => {
    try {
        const movie = await Movie.find();
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }

}

// Crear un endpoint get que devuelva una película según su _id
const  getOneMovie = async (req, res) => {
    try {
        const {id} = req.params;    
        const movie = await Movie.findById(id);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }

};

// Crear un endpoint get que devuelva un valor por su titulo.
const  getOneMovieTitle = async (req, res) => {
    try {
        const {title} = req.params;    
        if (!title) {
            return res.status(400).send(`Movie not found`);
          }
        const movie = await Movie.find({ "title" : { $regex :  RegExp(`^${title}$`, 'i') } } );
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }

};

// Crear un endpoint get que devuelva los documentos según su género.
const  getMovieGenre = async (req, res) => {
    try {
        const {genre} = req.params;
        console.log(genre); 
        
        const movie = await Movie.find({"genre":genre});
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }

};

// Crear un endpoint get que devuelva las películas que se han estrenado a partir de 2010.
const  getMovie2010 = async (req, res) => {
    try {
        const {year} = req.params;
        console.log('estrenos 2010');
        if (!year) {
            return res.status(400).send(`year is empty`);
          }
        const movie = await Movie.find({year: { $gte: year }});
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }

};

// Crear un método post de Movies para crear una nueva película.
const postMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body) // objeto nuevo de la clase Movie
        const createdMovie = await newMovie.save(); // para guardar con mongoose. devuelve el elemento guardado
        return res.status(201).json(createdMovie); // res del nuevo elemento guardado
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Crear un método put de Movies para modificar una película.
const putMovie = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        console.log(req.body);
        const movie = new Movie(req.body);
        movie._id = id;
        const updatedMovie = await Movie.findByIdAndUpdate(id, movie, {new: true}); 
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// Crear un método delete de Movies para eliminar una película.
const deleteMovie = async(req, res) => {
    try {
        // const {id} = req.params;
        const id = req.params.id;
        const movie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getAllMovies, getOneMovie, getOneMovieTitle,getMovieGenre,getMovie2010,postMovie, putMovie, deleteMovie};