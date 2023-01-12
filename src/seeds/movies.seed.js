const mongoose = require('mongoose');
const Movie = require('../api/models/model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

// por si quiero añadir más pelis al ejercicio
const masMovies =[ 
  { 
    "title": "El señor de los anillos",
    "director": "Peter Jackson",
    "year": 2001,
    "genre": "Fantástico"
  }
];

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

mongoose.set("strictQuery", false);

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0) {
        await Movie.collection.drop();
        console.log('pelis borradas');
    }
}).catch((error) => console.log("error borrando pelis", error))
.then(async () => {
    const moviesMap = movies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("pelis insertadas")
})
.catch((error) => console.log("error insertanto pelis", error))
.finally(() => mongoose.disconnect());