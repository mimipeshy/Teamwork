const express = require('express');
const router = express.Router();
const query = require('../server/queries');


// user can create a gif
router.post("/create-gif" , query.createGif);


module.exports = router;
