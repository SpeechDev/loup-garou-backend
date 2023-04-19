const express = require('express');
const router  = express.Router(); 
const userController = require('../controllers/user.controller.js'); 

router.get("/user/me", userController.me);



module.exports = router; 
