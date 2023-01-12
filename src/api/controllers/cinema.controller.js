const Cinema = require('../models/cinema');


const  getCinemas = async(req, res) => {
    try {
        const cinema = await Cinema.find();
        return res.status(200).json(cinema);
    } catch (error) {
        return res.status(500).json(error);
    }

}

const getCinema = async(req, res) => {
    try {
        const {id} = req.params;        
        const cinema = await Cinema.findById(id).populate('movies')
        // control del error que no encuentre el cinema
        if(!cinema){            
            return res.status(400).send('cinema not found');
        }
        return res.status(200).json(cinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postCinema = async (req, res) => {
    try {
        const {id} = req.params;        
        const cinema = await Cinema.findById(id)
        // control del error que no encuentre el cinema
        if(!cinema){            
            return res.status(400).send('cinema not found');
        }
        const newCinema = new Cinema(req.body) // objeto nuevo de la clase Cinema
        const createdCinema = await newCinema.save(); // para guardar con mongoose. devuelve el elemento guardado
        return res.status(201).json(createdCinema); // res del nuevo elemento guardado
    } catch (error) {
        return res.status(500).json(error);
    }
}


const putCinema = async (req, res) => {
    try {
        const {id} = req.params;        
        const cinema = await Cinema.findById(id)
        // control del error que no encuentre el cinema
        if(!cinema){            
            return res.status(400).send('cinema not found');
        }
        const cinemaNew = new Cinema(req.body);
        cinema._id = id;
        const updatedCinema = await Cinema.findByIdAndUpdate(id, cinemaNew, {new: true}); 
        return res.status(200).json(updatedCinema);

    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCinema = async(req, res) => {
    try {        
        const {id} = req.params; 
        const cinema = await Cinema.findById(id)
        // control del error que no encuentre el cinema
        if(!cinema){            
            return res.status(400).send('cinema not found');
        }
        const cinemaDelete = await Cinema.findByIdAndDelete(id);
        return res.status(200).json(cinemaDelete);
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = {getCinemas,getCinema,postCinema, putCinema, deleteCinema};