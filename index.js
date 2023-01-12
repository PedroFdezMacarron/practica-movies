const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./src/api/routes/routes');
const cinemaRoutes = require('./src/api/routes/cinema.routes.js');

const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();



app.use(express.json());        //esto se pone siempre para que lea json del body
app.use(express.urlencoded({extended: true})); //esto se pone siempre para que lea json del body

app.use('/movies', routes);
app.use('/cinemas', cinemaRoutes);

app.listen(PORT, () => console.log('listening on port ', PORT));