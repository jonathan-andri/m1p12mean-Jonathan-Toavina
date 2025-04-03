const express = require('express') ;
const router = express.Router() ;
const paymentController = require('../controllers/paymentController') ;


//creer utilisateur
router.post('/', paymentController.createPayment);

//lire utilisateur 
router.get('/', paymentController.getPayments);

router.get(':/id', paymentController.getPaymentById);

//modifier utilisateur 
router.put('/:id', paymentController.updatePayment);

//supprimer utilisateur
router.delete('/:id', paymentController.deletePayment);

router.get('/userId', paymentController.getPaymentsByUserId);

module.exports = router;