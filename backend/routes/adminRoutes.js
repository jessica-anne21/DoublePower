const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js');

router.post('/addFakultas', adminController.addFakultas);
router.post('/addProgramStudi', adminController.addProgramStudi);
router.post('/addUser', adminController.addUser);
router.post('/addBeasiswa', adminController.addBeasiswa);

module.exports = router;
