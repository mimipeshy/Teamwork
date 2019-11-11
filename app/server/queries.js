const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool }= require("../server/db");

const createGif = (req,res) => {
  const {title, image, date} = req.body;
  pool.query( "INSERT INTO gif (title, image_url, date_created) VALUES($1, $2, $3) RETURNING gifid, title, image_url, date_created",
    [title, image, date], error => {
    if (error){
      throw error
    }    res.status(201).json({
              status: "success",
              data: {
                message: "GIF image successfully posted",
                createdOn: date,
                title: title,
                imageUrl:image
              }
            });
  })
}
const createArticles =(req, res) => {
  const {title,article, articleid} = req.body;
  pool.query("INSERT INTO article (title, article, articleid) VALUES($1, $2, $3) RETURNING title, article,articleid",
  [title,article, articleid], error =>{
    if (error){
      throw error
    }res.status(201).json({
      status: "success",
      data: {
        message: "GIF image successfully posted",
        title: title,
        article:article,
        articleid:articleid
      }
      });
  })
}

module.exports = {
  createGif,
  createArticles
}