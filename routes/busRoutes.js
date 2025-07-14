const express = require('express');
const router = express.Router();
const busController = require('../Controller/busController');


// POST /buses - add a new bus
router.post('/', busController.addBus);

// GET /buses - Get all buses
router.get('/', busController.getAllBuses);

// GET /buses/available/:seats - filter buses by available seats
router.get('/buses/available/:seats', busController.getAvailableBuses);



module.exports = router;
