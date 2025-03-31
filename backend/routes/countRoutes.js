const express = require('express');
const router = express.Router();
const countController = require('../controllers/countController');

router.get('/', countController.getCount);

router.get('/:id', countController.getById);

router.post('/', countController.createCount);

router.put('/:id', countController.updateCount);

router.delete('/:id', countController.deleteCount);

module.exports = router;