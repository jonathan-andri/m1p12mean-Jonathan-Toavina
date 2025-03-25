const express = require('express') ;
const router = express.Router() ;
const userController = require('../controllers/userController');
const jwtAuth = require('../middleware/jwtAuth');
const auth = require('../middleware/roleMiddleware');


//creer utilisateur
router.post('/', userController.createUser);

//lire utilisateur 
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById) ;

//modifier utilisateur 
router.put('/:id', userController.updateUser);

//supprimer utilisateur
router.delete('/:id', userController.deleteUser);

module.exports = router;