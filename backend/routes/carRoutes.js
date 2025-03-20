const express = require('express') ;
const router = express.Router() ;
const carController = require('../controllers/carController') ;


//creer car
router.post('/', carController.createCar);

//lire car 
router.get('/', carController.getCars);

//get a car
router.get("/:id", carController.getCarById) ;

//modifier car 
router.put('/:id', carController.updateCar);

//supprimer car
router.delete('/:id', carController.deleteCar);

module.exports = router;