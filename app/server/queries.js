const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool }= require("../server/db");

const createGif = (req,res) => {
  const {title, image, date} = req.body;
  pool.query( "INSERT INTO gif (title, image_url, date_created) VALUES($1, $2, $3) RETURNING gifid, title, image_url, date_created",
    [title, image, date], (error,results) => {
    if (error){
      throw error
    }    res.status(201).json({
              status: "success",
              data: {
                message: "GIF image successfully posted",
                data:results.rows
              }
            });
  })
}
const createArticles =(req, res) => {
  const {title,article, date_created,authorid} = req.body;
  pool.query("INSERT INTO article(title, article,date_created,authorid) VALUES($1, $2, $3, $4) RETURNING * ",
  [title,article, date_created,authorid], (error,results) =>{
    if (error){
      throw error
    }res.status(201).json({
      status: "success", 
      data: {
        message: "Article successfully posted",
        results:results.rows, 
      }
      });
  })
}
const updateArticle = (request, response) => {
  const {article_id} =parseInt(request.params)
  const { title,article } = request.body

  pool.query('UPDATE article SET title = $1, article = $2 WHERE article_id = $3 RETURNING title, article',
    [title, article,article_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json({
        status:"success",
        message:`article modified `,
      data:{
        results:results.rows
      }})
    }
  );
  }

module.exports = {
  createGif,
  createArticles,
  updateArticle,

}