const express = require('express');
const { analyzeScam } = require('../controllers/scamController');
const router = express.Router();

router.post('/detect', analyzeScam);

module.exports = router;
//test