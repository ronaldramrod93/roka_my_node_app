const { Router } = require('express');

const { bmiPost } = require('../controllers/bmi');

const router = Router();

router.post('/', bmiPost );

module.exports = router;