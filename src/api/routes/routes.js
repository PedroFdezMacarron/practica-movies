const express = require('express');
const {getAllMovies, getOneMovie, getOneMovieTitle,getMovieGenre,getMovie2010,postMovie, putMovie, deleteMovie} = require('../controllers/controller');

const router = express.Router();
router.get('/title/:title',  getOneMovieTitle);
router.get('/title',  getOneMovieTitle);

router.get('/genre/:genre',  getMovieGenre);
router.get('/year/:year',  getMovie2010);
router.get('/year',  getMovie2010);
router.get('/',  getAllMovies);
router.get('/:id',  getOneMovie);
router.post('/',  postMovie);
router.put('/:id',  putMovie);
router.delete('/:id',  deleteMovie);


module.exports = router;