const express = require('express') ;
const router = express.Router() ;
const paymentController = require('../controllers/paymentController') ;


//creer utilisateur
router.post('/', paymentController.createPayment);

//lire utilisateur 
router.get('/', paymentController.getAllPayments);

router.get(':/id', paymentController.getPaymentById);

//modifier utilisateur 
router.put('/:id', paymentController.updatePayment);

//supprimer utilisateur
router.delete('/:id', paymentController.deletePayment);

module.exports = router;