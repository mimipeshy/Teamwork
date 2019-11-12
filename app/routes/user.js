const express = require('express');
const router = express.Router();
const query = require('../server/queries');


// user can create a gif
router.post("/gifs" , query.createGif);
router.post("/article", query.createArticles);
router.patch("/article/:article_id", query.updateArticle);



module.exports = router;
