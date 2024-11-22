const express = require('express');
const { getNearbyHospitals } = require('../controllers/hospitals');
const router = express.Router();

router.get('/', getNearbyHospitals);

module.exports = router;
