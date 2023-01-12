const express = require('express');
const {getCinemas,getCinema,postCinema, putCinema, deleteCinema} = require('../controllers/cinema.controller');

const router = express.Router();


router.get('/',  getCinemas);
router.get('/:id', getCinema);
router.post('/',  postCinema);
router.put('/:id',  putCinema);
router.delete('/:id',  deleteCinema);


module.exports = router;