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

router.get('/customer', jwtAuth.authMiddleware, auth.roleMiddleware('customer'), (req, res) => {
    res.json({ message: 'Welcome to customer Dashboard' });
});

router.get('/admin', jwtAuth.authMiddleware, auth.roleMiddleware('manager'), (req, res) => {
    res.json({ message: 'Welcome to Admin Dashboard' });
});

router.get('/mechanic', jwtAuth.authMiddleware, auth.roleMiddleware('mechanic'), (req, res) => {
    res.json({ message: 'Welcome to mechanic Dashboard' });
});
module.exports = router;