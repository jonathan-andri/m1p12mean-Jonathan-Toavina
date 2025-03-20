const express = require('express') ;
const router = express.Router() ;
const serviceController = require('../controllers/serviceController');

//create service 
router.post('/', serviceController.createService) ;

//read all service
router.get('/', serviceController.getAllServices) ;

router.get('/:id', serviceController.getServiceById) ;

//update service
router.put('/:id', serviceController.updateService) ;

//delete service 
router.delete('/:id', serviceController.deleteService) ;

module.exports = router;