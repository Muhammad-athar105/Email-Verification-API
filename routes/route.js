const express = require("express");
const { sign } = require("jsonwebtoken");
const router =  express.Router();

// import controller
const {signup, activateAccount} = require('../controllers/auth');

router.post ("/signup", signup);
router.post ("/email-activate", activateAccount); 


module.exports = router;