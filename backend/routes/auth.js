const app = require('express');
const authController = require('../controller/authController');

const router = app.Router();

router.post('/auth', authController.login);

    
module.exports = router;